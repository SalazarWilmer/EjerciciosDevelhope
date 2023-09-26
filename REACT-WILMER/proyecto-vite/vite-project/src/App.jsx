import Hello from "./Ejercicios/Hello";
import Message from "./Ejercicios/Message";
import Welcome from "./Ejercicios/Welcome";
function App() {
  const name = 'Wilmer';
  return (
    <div className="App">
      <Hello />
      <Message />
      <Hello />
      <Welcome name={name} age={26}/>
    </div>
  );
}
export default App;
