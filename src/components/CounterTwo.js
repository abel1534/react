import React, { useReducer } from "react";

let initialState = {
  firstCounter: 0,
  secondCounter: 3,
};
const countFn = (currentState, action) => {
  switch (action.type) {
    case "increment":
      return {
				...currentState,
        firstCounter: currentState.firstCounter + action.value,
			};
    case "decrement":
      return {
				...currentState,
        firstCounter: currentState.firstCounter - action.value,
			};
    case "increment3":
      return {
        ...currentState,
        secondCounter: currentState.secondCounter + action.value,
      };
    case "decrement3":
      return {
        ...currentState,
        secondCounter: currentState.secondCounter - action.value,
      };
    case "reset":
      return initialState;
    default:
      return currentState;
  }
};

const CounterTwo = () => {
  const [count, dispatch] = useReducer(countFn, initialState);

  return (
    <>
      <h3>Counter Two</h3>
      <div>Count - {count.firstCounter}</div>
      {/* <div>Count Two - {count.secondCounter}</div> */}
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        add
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        subract
      </button>
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        add by 5
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
        subract by 5
      </button>
      <h3>Seconder Counter</h3>
      <div>Count 2 - {count.secondCounter}</div>
      <button onClick={() => dispatch({ type: "increment3", value: 3 })}>
        Increment second Counter by 3
      </button>
      <button onClick={() => dispatch({ type: "decrement3", value: 3 })}>
        Decrment value by 3
      </button>
      <h1></h1>
      <button onClick={() => dispatch({ type: "reset" })}>Reset All</button>

      {/* <button onClick={() => dispatch({ type: 'increment'})}>add</button>
			<button onClick={() => dispatch({ type: 'decrement'})}>subract</button>
			<button onClick={() => dispatch({ type: 'increment5'})}>add by 5</button>
			<button onClick={() => dispatch({ type: 'decremnt5'})}>subract by 5</button>
			<button onClick={() => dispatch({ type: 'reset'})}>reset</button> */}
    </>
  );
};

export default CounterTwo;
