import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState({ lat: null, lon: null });

  useEffect(() => {
    const fetchCurrentWeather = async (lat, lon) => {
      try {
        const apiKey = "2433638808f3d80480ea66713c34b8d3";

        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
        );

        const airQualityResponse = await axios.get(
          `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`
        );

        const aqiValue = airQualityResponse.data.list[0]?.main.aqi || "N/A";
        let aqiDescription = "Unknown";

        if (aqiValue === 1) aqiDescription = "1 Good";
        else if (aqiValue === 2) aqiDescription = "2 Fair";
        else if (aqiValue === 3) aqiDescription = "3 Moderate";
        else if (aqiValue === 4) aqiDescription = "4 Poor";
        else if (aqiValue === 5) aqiDescription = "5 Very Poor";

        setWeatherData({
          location: response.data.name,
          temp: response.data.main.temp,
          humidity: response.data.main.humidity,
          windSpeed: response.data.wind.speed,
          aqi: aqiDescription,
          description: response.data.weather[0]?.description || "N/A",
        });
      } catch (error) {
        console.error("Error fetching weather data:", error.response || error);
        setError("Could not fetch weather data. Please try again later.");
      }
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ lat: latitude, lon: longitude });
          fetchCurrentWeather(latitude, longitude);
        },
        (err) => {
          console.error("Error getting location:", err);
          setError("Could not get location. Please enable location services.");
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  }, []);

  if (error) return <p>{error}</p>;
  if (!weatherData) return <p>Loading weather data...</p>;

  return (
    <div className="weather">
      <h1>Current Weather</h1>
      <p>Location: {weatherData.location}</p>
      <p>Temperature: {weatherData.temp}°C</p>
      <p>Condition: {weatherData.description}</p>
      <p>Humidity: {weatherData.humidity}%</p>
      <p>Wind Speed: {weatherData.windSpeed} m/s</p>
      <p>Air Quality Index: {weatherData.aqi}</p>
    </div>
  );
};

export default Weather;
