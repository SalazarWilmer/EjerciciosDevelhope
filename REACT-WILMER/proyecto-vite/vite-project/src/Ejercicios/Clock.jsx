import React, { useState, useEffect } from "react";

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
    <div>
      <h2>Current Time: {currentTime.toLocaleTimeString()}</h2>
    </div>
  );
};

export default Clock;
