import { useState } from 'react';

const useCounter = (initialValue = 0, incrementAmount = 1, decrementAmount = 1) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = () => {
    setCounter(prevCounter => prevCounter + incrementAmount);
  };

  const decrement = () => {
    setCounter(prevCounter => prevCounter - decrementAmount);
  };

  const reset = () => {
    setCounter(initialValue);
  };

  return { counter, increment, decrement, reset };
};

export default useCounter;
