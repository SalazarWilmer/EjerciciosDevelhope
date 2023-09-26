import Hello from "./Ejercicios/Hello";
import Message from "./Ejercicios/Message";
import Welcome from "./Ejercicios/Welcome";
function App() {

  return (
    <div className="App">
      <Hello />
      <Message />
      <Hello />
      <Welcome name={<strong>Wilmer</strong>} />
    </div>
  );
}
export default App;
