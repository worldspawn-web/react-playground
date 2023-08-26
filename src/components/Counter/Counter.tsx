import { FC, useState } from 'react';

const Counter: FC = () => {
  const [countState, setCountState] = useState<number>(0);

  const increment = () => {
    setCountState(countState + 1);
  };

  const decrement = () => {
    setCountState((prevState) => {
      if (prevState === 0) return prevState;
      return prevState - 1;
    });
  };

  return (
    <>
      <span>{countState}</span>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
};

export default Counter;
