import Hello from "./Ejercicios/Hello";
import Message from "./Ejercicios/Message";
import Welcome from "./Ejercicios/Welcome";
import Age from "./Ejercicios/Age";
import AlertClock from "./Ejercicios/AlertClock";
import Counter from "./Ejercicios/Counter";
import Clock from "./Ejercicios/Clock";
import MouseClicker from "./Ejercicios/MouseClicker";
function App() {
  const initialValue = 0;
  const incrementAmount = 5;
  const decrementAmount = 1;

  const handleAlertClick = (currentTime) => {
    alert(`La hora actual es: ${currentTime}`);
  };
  const name = "Wilmer";
  return (
    <div className="App">
      <Hello />
      <Message />
      <Hello />
      <Age age={10} />
      <Welcome name={name} age={26} />
      <AlertClock onClickHandler={handleAlertClick} />
      <Counter initialValue={initialValue} incrementAmount={incrementAmount} decrementAmount={decrementAmount}  />
      <Clock />
      <MouseClicker name="one" />
    </div>
  );
}
export default App;
