import "./App.css";
import JSX1 from "./Ejercicios/JSX1";
import JSX2 from "./Ejercicios/JSX2";
import JSX3 from "./Ejercicios/JSX3";
import JSX4 from "./Ejercicios/JSX4";
import JSX5 from "./Ejercicios/JSX5";




function App() {
  return (
    <div className="App">
      <JSX1/>
      <JSX2/>
      <JSX3/>
      <JSX4 name={<a href="https://google.com">Ejemplo</a>} />
      <JSX5 
      a={16}
      b={24} />
    </div>
  );
}

export default App;