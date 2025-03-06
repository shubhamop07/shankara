import React, { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database"; 
import { db } from "../firebase"; 

const SavedData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Reference to the "sensorData" node in your Realtime Database
    const dataRef = ref(db, "sensorData");

    // Listen for changes in the Realtime Database
    onValue(dataRef, (snapshot) => {
      const value = snapshot.val(); // Get the data from the snapshot

      if (value) {
        // Convert object to an array
        const dataArray = Object.values(value);
        setData(dataArray);
      } else {
        console.log("No data available.");
        setData([]);
      }

      setLoading(false);
    });

    return () => {
      setData([]);
      setLoading(true);
    };
  }, []);

  if (loading) {
    return <p>Loading saved data...</p>;
  }

  return (
    <div className="saved-data">
      {data.length > 0 ? (
        <ul>
          {data.map((item, index) => (
            <li key={index} style={{ marginBottom: "20px" }}>
              <strong>Animal:</strong> {item.category} <br />
              <strong>Detected at:</strong> {item.timestamp} <br />
              {item.imageUrl ? (
                <img src={item.imageUrl} alt={item.category} style={{ width: "200px", height: "auto", marginTop: "10px" }} />
              ) : (
                <p>No image available</p>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>No data found.</p>
      )}
    </div>
  );
};

export default SavedData;
