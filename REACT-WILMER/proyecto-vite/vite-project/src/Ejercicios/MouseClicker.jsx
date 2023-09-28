import React from "react";

const MouseClicker = ({ name }) => {
  const handleClick = (event) => {
    console.log("Boton click:", event.target.name);
  };
//   const handleImageClick = (event) => {
//     console.log("Img click, src:", event.target.src);
// };
const handleImageClick = (event) => {
    console.log("Imagen clicada, src:", event.target.src);
    event.stopPropagation(); 
  };
  return (
    <button name={name} onClick={handleClick}>
      <img src="1.jpg" alt="pics" 
      onClick={handleImageClick}
      style={{ width: "600px", height: "400px" }}/>
      
      {name}
    </button>
  );
};

export default MouseClicker;
