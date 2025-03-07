// import React from "react";

// const LiveCamera = () => {
//   return (
//     <div className="live-camera">
//       <iframe
//         src="https://your-camera-url" // Replace with your live camera stream URL
//         title="Live Camera"
//         width="100%"
//         height="300"
//         allow="camera"
//       />
//     </div>
//   );
// };

// export default LiveCamera;



import { useEffect } from "react";

const LiveCamera = () => {
  useEffect(() => {
    // Automatically open the Live Camera link when this component is rendered
    window.open(
      "https://manage.realvnc.com/en/?state=trial-created&ts=a&lai_vid=RX0VkDpbbCz0&lai_sr=15-19&lai_sl=l",
      "_blank"
    );

    console.log("Live Camera tab opened."); // Debug log to check when it runs
  }, []);

  return (
    <div>
      <p>Live Camera is now open in a new tab.</p>

      {/* This button was used to manually open the link but is now redundant */}
      {/* <button onClick={() => window.open("https://manage.realvnc.com/en", "_blank")}>Open Live Camera</button> */}

      {/* Any future features can be added here */}
    </div>
  );
};

export default LiveCamera;
