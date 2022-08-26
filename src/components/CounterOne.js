import React, { useReducer } from "react";

let initialState = 10;
const reduce = (currentState, action) => {
  switch (action) {
    case "increment":
      return currentState + 1;
    case "decrement":
      return currentState - 1;
    case "reset":
      return initialState;
    default:
      return currentState;
  }
};

const CounterOne = () => {
  const [count, dispatch] = useReducer(reduce, initialState);

  return (
    <>
      <div>Count - {count}</div>
      <br />
      <button onClick={() => dispatch("increment")}>Incr</button>
      <br />
      <button onClick={() => dispatch("decrement")}>Decr</button>
      <br />
      <button onClick={() => dispatch("reset")}>Reset</button>
    </>
  );
};

export default CounterOne;
