import React, { useState } from "react";
import Weather from "./components/Weather";
import LiveCamera from "./components/LiveCamera";
import SavedData from "./components/SavedData";
import AboutUs from "./components/AboutUs";
import Login from "./components/Login";
import "./App.css";
import logo from "./components/logo.jpg"; // Import the logo
import { FaCloudSun, FaVideo, FaDatabase, FaInfoCircle } from "react-icons/fa"; // Import icons

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState("");

  const tabData = [
    { name: "Weather", icon: <FaCloudSun /> },
    { name: "Live Camera", icon: <FaVideo /> },
    { name: "Saved Data", icon: <FaDatabase /> },
    { name: "About Us", icon: <FaInfoCircle /> },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "Weather":
        return <Weather />;
      case "Live Camera":
        return <LiveCamera />;
      case "Saved Data":
        return <SavedData />;
      case "About Us":
        return <AboutUs />;
      default:
        return <p>Please select a tab to view content.</p>;
    }
  };

  return (
    <div className="app-container">
      {!isAuthenticated ? (
        <Login setIsAuthenticated={setIsAuthenticated} />
      ) : (
        <>
          <header>
            {/* Added the logo inside the header */}
            <img src={logo} alt="Self-Power Wildlife Intruder Logo" className="logo" />
            <h1> AgroEye </h1>
          </header>
          <nav className="tab-nav">
            {tabData.map((tab) => (
              <button
                key={tab.name}
                className={activeTab === tab.name ? "active-tab" : ""}
                onClick={() => setActiveTab(tab.name)}
              >
                {tab.icon} {tab.name}
              </button>
            ))}
          </nav>
          <main className="tab-content">{renderTabContent()}</main>
        </>
      )}
    </div>
  );
}

export default App;
