import logo from "./logo.svg";
import "./App.css";

function App() {
  const hello = <h1>Hello, World!</h1>;
  const diHola = (name) => {
    // return <h1>¡Hola, {name}!</h1>;
  // };

  // para verificar si name está definido. Si está definido, muestra "¡Hola, {name}!",
  //  de lo contrario, muestra "¡Hola, undefined!". De esta manera, si no se pasa un nombre,
  //  mostrará "¡Hola, undefined!"
  // y si solamente se deja asi nada dentro de los parentesis simplemente arroja el string ¡Hola, !
  // siendo este su return sin el if return <h1>¡Hola, {name}!</h1>;

    if (name) {
      return <h1>¡Hola, {name}!</h1>;
    } else {
      return <h1>¡Hola, undefined!</h1>;
    }

  };

  const hi = diHola();

  return (
    <div>
      {hello}
      {hi}
    </div>
  );
}

export default App;
