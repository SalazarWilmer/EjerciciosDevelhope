import React, { useState } from "react";
import Welcome from "./Welcome";

const InteractiveWelcome = () => {
  const [name, setName] = useState("Wilmer");

  const handleInputChange = (event) => {
    setName(event.target.value);
  };
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={handleInputChange}
        placeholder="Ingrese su nombre"
      />
      <Welcome name={name} />
    </div>
  );
};

export default InteractiveWelcome;
