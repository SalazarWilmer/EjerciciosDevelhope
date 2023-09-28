import Hello from "./Ejercicios/Hello";
import Message from "./Ejercicios/Message";
import Welcome from "./Ejercicios/Welcome";
import Age from "./Ejercicios/Age";
import AlertClock from "./Ejercicios/AlertClock";
function App() {
  const name = 'Wilmer';
  return (
    <div className="App">
      <Hello />
      <Message />
      <Hello />
      <Age age={10} />
      <Welcome name={name} age={26}/>
      <AlertClock />
    </div>
  );
}
export default App;
