import React, { useState, useEffect } from "react";
import "../assets/index.scss"
const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const updateClock = () => {
      setCurrentTime(new Date());
    };

    const intervalId = setInterval(updateClock, 1000);

    return () => clearInterval(intervalId);
  }, []); 

  return (
    <div className="clock-container">
      <h2>Current Time: {currentTime.toLocaleTimeString()}</h2>
    </div>
  );
};

export default Clock;
