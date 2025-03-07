import React from "react";

const LiveCamera = () => {
  return (
    <div className="live-camera">
      <iframe
        src="http://192.168.42.145:5000/" // Replace with your live camera stream URL
        title="Live Camera"
        width="100%"
        height="300"
        allow="camera"
      />
    </div>
  );
};

export default LiveCamera;


