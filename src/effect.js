// useEffect: persistent state
import React from "react";

function Counter({ step = 1, initialCount = 0 }) {
  // 🐨 initialize the state to the value from localStorage
  // 💰 Number(window.localStorage.getItem('count') || initialCount)
  const [count, setCount] = React.useState(
    Number(window.localStorage.getItem("count") || initialCount)
  );
  const increment = () => setCount(c => c + step);
  // 🐨 Here's where you'll use `React.useEffect`.
  // The callback should set the `count` in localStorage.

  React.useEffect(() => {
    window.localStorage.setItem("count", count);
  });

  return <button onClick={increment}>{count}</button>;
}

/*
🦉 Elaboration & Feedback
After the instruction, copy the URL below into your browser and fill out the form:
http://ws.kcd.im/?ws=React%20Hooks&e=useEffect%3A%20persistent%20state&em=
*/

////////////////////////////////////////////////////////////////////
//                                                                //
//                 Don't make changes below here.                 //
// But do look at it to see how your code is intended to be used. //
//                                                                //
////////////////////////////////////////////////////////////////////

function Effect() {
  return <Counter />;
}
Effect.title = "useEffect: persistent state";

export default Effect;
