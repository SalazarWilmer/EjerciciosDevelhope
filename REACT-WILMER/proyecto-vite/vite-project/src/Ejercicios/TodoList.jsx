import React, { useState } from "react";

const TodoList = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");


const handleAdditem = () => {
  if (newItem.trim() !== "") {
    setItems([...items, newItem]);
    setNewItem(""); // Respuesta al ejercicio 57:
    // Ya habia pensado en que mi componente limpiara el input al presionar el boton agregar un item
  }
};
const handleResetItems = () => {
    setItems([]);
}
  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Agregar nuevo item"
      />

      <button onClick={handleAdditem}>Agregar</button>
      <button onClick={handleResetItems}>Reset</button>
    </div>
  );
};

export default TodoList;
