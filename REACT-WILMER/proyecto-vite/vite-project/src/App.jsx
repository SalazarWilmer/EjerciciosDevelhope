import React, { useState, useEffect, useContext } from 'react';
import Hello from "./Ejercicios/Hello";
import Message from "./Ejercicios/Message";
import Welcome from "./Ejercicios/Welcome";
import Age from "./Ejercicios/Age";
import AlertClock from "./Ejercicios/AlertClock";
import Counter from "./Ejercicios/Counter";
import Clock from "./Ejercicios/Clock";
import MouseClicker from "./Ejercicios/MouseClicker";
import MultiButton from "./Ejercicios/MultiButton";
import InteractiveWelcome from "./Ejercicios/InteractiveWelcome";
import Login from "./Ejercicios/Login";
import UncontrolledLogin from "./Ejercicios/UncontrolledLogin";
import FocusableInput from "./Ejercicios/FocusableInput";
import FirstMount from "./Ejercicios/FirstMount";
import Colors from "./Ejercicios/Colors";
import TodoList from "./Ejercicios/TodoList";
import Container from "./Ejercicios/Container";
import { LanguageProvider } from "./Ejercicios/LanguageContext"
import LanguageSelector from './Ejercicios/LanguageSelector';
import GithubUser from './Ejercicios/GithubUser';
import GithubUsers from './Ejercicios/GithubUsers';

function App() {
  const handleLogin = (userData) => {
    console.log("Login data:", userData);
  };
  const initialValue = 500;
  const incrementAmount = 50;
  const decrementAmount = 50;

  const handleAlertClick = (currentTime) => {
    alert(`La hora actual es: ${currentTime}`);
  };
  const name = "John";
  const colorList = [
    { id: 1, name: "Rojo" },
    { id: 2, name: "Negro" },
    { id: 3, name: "Dorado" },
    { id: 4, name: "Verde" },
  ];

  const [language, setLanguage] = useState('en');

  const handleLanguageChange = (event) => {
    console.log('Selected language:', event.target.value);
    setLanguage(event.target.value);
  };
  
  return (
    <div className="App">
      <LanguageProvider value={language}>
        <LanguageSelector />
        <Clock />
      </LanguageProvider>
      <Hello />
      <Message />
      <Hello />
      <Age age={10} />
      <Welcome name={name} age={40} />
      <AlertClock onClickHandler={handleAlertClick} />
      <Counter
        initialValue={initialValue}
        incrementAmount={incrementAmount}
        decrementAmount={decrementAmount}
      />
      <MouseClicker name="one" />
      <MultiButton />
      <InteractiveWelcome />
      <Login onLogin={handleLogin} />
      <UncontrolledLogin onLogin={handleLogin} />
      <FocusableInput />
      <FirstMount />
      <h1>Lista de colores</h1>
      <Colors items={colorList} />
      <TodoList />
      <Container title="Mi primer Contenedor">
        <p>Contenido dentro del container :P</p>
      </Container>

      <GithubUser username="SalazarWilmer" />

      <GithubUsers />
    </div>
  );
}
export default App;
