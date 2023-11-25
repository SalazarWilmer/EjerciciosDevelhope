import { useState, useCallback } from 'react';

const useCounter = (initialValue = 0, incrementAmount = 1, decrementAmount = 1) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = useCallback(() => {
    setCounter(prevCounter => prevCounter + incrementAmount);
  }, [incrementAmount]);

  const decrement = useCallback(() => {
    setCounter(prevCounter => prevCounter - decrementAmount);
  }, [decrementAmount]);

  const reset = useCallback(() => {
    setCounter(initialValue);
  }, [initialValue]);

  return { counter, increment, decrement, reset };
};

export default useCounter;
