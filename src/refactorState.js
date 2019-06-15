// useCounter: custom hooks
import React from "react";

// 🐨 Make a custom hook called useCounter that accepts the step and
// initialCount and returns the count and increment functions

function useCounter({ step = 1, initialCount = 0 }) {
  const [count, setCount] = React.useState(initialCount);
  const increment = () => setCount(c => c + step);
  return [count, increment];
}

function Counter({ step = 1, initialCount = 0 }) {
  // 💣 remove this (or move it to your custom hook)
  const [count, increment] = useCounter({ step, initialCount });
  return <button onClick={increment}>{count}</button>;
}

/*
🦉 Elaboration & Feedback
After the instruction, copy the URL below into your browser and fill out the form:
http://ws.kcd.im/?ws=React%20Hooks&e=useCounter%3A%20custom%20hooks&em=
*/

////////////////////////////////////////////////////////////////////
//                                                                //
//                 Don't make changes below here.                 //
// But do look at it to see how your code is intended to be used. //
//                                                                //
////////////////////////////////////////////////////////////////////

function RefactorState() {
  return <Counter />;
}
RefactorState.title = "useCounter: custom hooks";

export default RefactorState;
