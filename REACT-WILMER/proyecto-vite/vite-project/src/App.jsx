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
function App() {
  const initialValue = 0;
  const incrementAmount = 5;
  const decrementAmount = 1;

  const handleAlertClick = (currentTime) => {
    alert(`La hora actual es: ${currentTime}`);
  };
  const name = "John";
  return (
    <div className="App">
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
      <Clock />
      <MouseClicker name="one" />
      <MultiButton />
      <InteractiveWelcome/>
      <Login />
    </div>
  );
}
export default App;
