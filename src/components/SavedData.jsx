import React, { useState, useEffect } from "react";
import { ref as dbRef, onValue, off } from "firebase/database";
import { db, storage } from "../firebase";
import { getDownloadURL, ref as storageRef, listAll } from "firebase/storage";

const SavedData = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchWildlifeImages = async () => {
    const folderRef = storageRef(storage, "wildlife-detection/");
    try {
      const res = await listAll(folderRef);
      return await Promise.all(res.items.map((itemRef) => getDownloadURL(itemRef)));
    } catch (error) {
      console.error("Error fetching images:", error);
      return [];
    }
  };

  useEffect(() => {
    const loadImages = async () => {
      const urls = await fetchWildlifeImages();
      setImages(urls);
      setLoading(false);
    };

    loadImages();
  }, []);

  if (loading) {
    return <p>Loading saved data...</p>;
  }

  return (
    <div className="saved-data" style={{ display: "flex", flexWrap: "wrap", gap: "20px", padding: "20px" }}>
      {images.length > 0 ? (
        images.map((url, index) => (
          <div
            key={index}
            style={{
              textAlign: "center",
              maxWidth: "220px",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "10px",
              boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={url}
              alt="Wildlife Detection"
              style={{ width: "200px", height: "auto", borderRadius: "10px" }}
            />
          </div>
        ))
      ) : (
        <p>No data found.</p>
      )}
    </div>
  );
};

export default SavedData;
