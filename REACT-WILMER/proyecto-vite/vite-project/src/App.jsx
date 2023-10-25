import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Welcome from "./Ejercicios/Welcome";
import Counter from "./Ejercicios/Counter";
import ShowGithubUser from "./Ejercicios/ShowGithubUser";

function App() {
  // const handleLogin = (userData) => {
  //   console.log("Login data:", userData);
  // };
  const initialValue = 500;
  const incrementAmount = 50;
  const decrementAmount = 50;

  // const handleAlertClick = (currentTime) => {
  //   alert(`La hora actual es: ${currentTime}`);
  // };
  // const name = "John";
  // const colorList = [
  //   { id: 1, name: "Rojo" },
  //   { id: 2, name: "Negro" },
  //   { id: 3, name: "Dorado" },
  //   { id: 4, name: "Verde" },
  // ];

  // const [language, setLanguage] = useState("en");

  // const handleLanguageChange = (event) => {
  //   console.log("Selected language:", event.target.value);
  //   setLanguage(event.target.value);
  // };
  const username = "SalazarWilmer";

  // const studentsList = [
  //   { id: 1, name: "Ben", age: 20 },
  //   { id: 2, name: "Robert", age: 25 },
  //   { id: 3, name: "Jack", age: 17 },
  //   { id: 3, name: "Wilson", age: 19 },
  // ];
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome name="John" age={30} />} />
        <Route path="/counter" element={<Counter initialValue={initialValue} incrementAmount={incrementAmount} decrementAmount={decrementAmount}/>} />
        <Route path="/users/:username" element={<ShowGithubUser />} />
      </Routes>
    </div>
  );
}
export default App;
