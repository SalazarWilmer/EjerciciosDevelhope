import Hello from "./Ejercicios/Hello";
import Message from "./Ejercicios/Message";
import Welcome from "./Ejercicios/Welcome";
import Age from "./Ejercicios/Age";
import AlertClock from "./Ejercicios/AlertClock";
import Counter from "./Ejercicios/Counter";
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
    </div>
  );
}
export default App;
