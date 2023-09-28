import React from "react";

const MouseClicker = ({ name }) => {
  const handleClick = (event) => {
    console.log("Boton click:", event.target.name);
  };

  return (
    <button name={name} onClick={handleClick}>
      <img src="1.jpg" alt="pics" />
      {name}
    </button>
  );
};

export default MouseClicker;
