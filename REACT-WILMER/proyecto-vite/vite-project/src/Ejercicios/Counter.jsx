import React from "react";
import CounterDisplay from "./CounterDisplay";
import useCounter from "./useCounter";
import "../styles/index.scss";

const Counter = ({ initialValue, incrementAmount, decrementAmount }) => {
  const { counter, increment, decrement, reset } = useCounter(initialValue, incrementAmount, decrementAmount);

  return (
    <div className="counter-display">
      <CounterDisplay count={counter} />
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
      <button onClick={reset}>Reiniciar</button>
    </div>
  );
};

export default Counter;
