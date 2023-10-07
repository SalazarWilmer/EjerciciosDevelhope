import React, { useState } from "react";

const TodoList = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");


const handleAdditem = () => {
  if (newItem.trim() !== "") {
    setItems([...items, newItem]);
    setNewItem("");
  }
};
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
    </div>
  );
};

export default TodoList;
