import logo from './logo.svg';
import './App.css';

function App() {

  const hello = <h1>Hello, World!</h1>;
  const diHola = (name) => {
    return <h1>¡Hola, {name}!</h1>;
  };

  const hi = diHola('Wilmer');

  return (
    <div >
     
        {hello}
        {hi}
   
    </div>
  );
}

export default App;
