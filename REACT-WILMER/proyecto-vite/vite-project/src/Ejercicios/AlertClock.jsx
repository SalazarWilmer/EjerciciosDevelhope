const AlertClock = () => {
  const handleButtonClick = () => {
    const currentTime = new Date().toLocaleTimeString();
    alert(`Current time is: ${currentTime}`);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Show Current Time</button>
    </div>
  );
};

export default AlertClock;
