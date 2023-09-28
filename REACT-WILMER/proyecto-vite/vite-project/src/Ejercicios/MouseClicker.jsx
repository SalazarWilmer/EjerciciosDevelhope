import React from "react";

const MouseClicker = ({ name }) => {
  const handleClick = (event) => {
    console.log("Boton click:", event.target.name);
  };
  const handleImageClick = (event) => {
    console.log("Img click, src:", event.target.src);
};
  return (
    <button name={name} onClick={handleClick}>
      <img src="1.jpg" alt="pics" 
      onClick={handleImageClick}/>
      {name}
    </button>
  );
};

export default MouseClicker;
