import React from "react";

const MouseClicker = ({ name }) => {
  const handleClick = (event) => {
    console.log("Boton click:", event.target.name);
  };

  return (
    <button name={name} onClick={handleClick}>
      {name}
    </button>
  );
};

export default MouseClicker;
