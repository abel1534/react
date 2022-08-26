import React, { useReducer } from "react";

let initialState = 0;
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

const CounterThree = () => {
  const [count, dispatch] = useReducer(reduce, initialState);
  const [count2, dispatchTwo] = useReducer(reduce, initialState)

  return (
    <>
      <div>Count - {count}</div>
      <br />
      <button onClick={() => dispatch("increment")}>Incr</button>
      <br />
      <button onClick={() => dispatch("decrement")}>Decr</button>
      <br />
      <button onClick={() => dispatch("reset")}>Reset</button>
      <h1></h1>
      <div>Count2 - {count2}</div>
      <br />
      <button onClick={() => dispatchTwo("increment")}>Incr</button>
      <br />
      <button onClick={() => dispatchTwo("decrement")}>Decr</button>
      <br />
      <button onClick={() => dispatchTwo("reset")}>Reset</button>
    </>
  );
};

export default CounterThree;
