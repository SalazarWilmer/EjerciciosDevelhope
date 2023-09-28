import React from 'react';

const AlertClock = ({ onClickHandler }) => {
  const handleButtonClick = () => {
    const currentTime = new Date().toLocaleTimeString();
    onClickHandler(currentTime);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Show Current Time</button>
    </div>
  );
};

export default AlertClock;

