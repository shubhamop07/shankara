import React, { useEffect, useState } from "react";
import { getDatabase, ref, onChildAdded } from "firebase/database"; // Import Firebase Realtime Database
import "./App.css";

const AnimalDetectionApp = () => {
  const [animalDetected, setAnimalDetected] = useState(null); // Store the latest detected animal data

  useEffect(() => {
    // Initialize Firebase Realtime Database
    const db = getDatabase();
    const sensorDataRef = ref(db, "sensorData");

    // Add a listener for new child nodes
    const unsubscribe = onChildAdded(sensorDataRef, (snapshot) => {
      const data = snapshot.val();

      if (data) {
        console.log("New animal data detected:", data); // Debug: Log the data to ensure it's fetched
        setAnimalDetected(data);

        // Generate a pop-up alert
        alert(
          `Animal Detected!\nCategory: ${data.category}\nProbability: ${(
            data.probability * 100
          ).toFixed(2)}%`
        );

        // Play the alert sound
        const audio = new Audio("/alert.mp3");
        audio
          .play()
          .then(() => {
            console.log("Alert sound played successfully."); // Debug: Confirm the sound is played
          })
          .catch((error) => {
            console.error("Error playing alert sound:", error); // Debug: Log sound playback errors
          });
      }
    });

    // Cleanup the listener on unmount
    return () => unsubscribe();
  }, []);

  return (
    <div className="app">
      <h1>Wild Animal Detection System</h1>
      {animalDetected ? (
        <div className="alert">
          <h2>Animal Alert!</h2>
          <p>Category: {animalDetected.category || "Unknown"}</p>
          <p>Probability: {(animalDetected.probability * 100).toFixed(2)}%</p>
          <p>
            Time:{" "}
            {new Date(animalDetected.timestamp * 1000).toLocaleString() || "N/A"}
          </p>
        </div>
      ) : (
        <p>No animals detected yet...</p>
      )}
    </div>
  );
};

export default AnimalDetectionApp;
