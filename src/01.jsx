// useState: couter

import React from "react";

function Counter({ step = 1, initialCount = 0 }) {
  // 🐨 use React.useState here
  // 🐨 create an increment function that calls the state updater you get from
  //    React.useState to increment the count
  // 🐨 render the count you get from React.useState inside the button and use
  //    your increment function as the onClick handler.

  // Make the counter accept props called `step` and `initialCount` and make the
  // counter increment by the given step and start at the given count.

  // use the functional updater

  const [counter, setCounter] = React.useState(initialCount);
  const increment = () => setCounter(c => c + step);

  return <button onClick={increment}>{counter}</button>;
}

/*
🦉 Elaboration & Feedback
After the instruction, copy the URL below into your browser and fill out the form:
http://ws.kcd.im/?ws=React%20Hooks&e=useState%3A%20couter&em=
*/

////////////////////////////////////////////////////////////////////
//                                                                //
//                 Don't make changes below here.                 //
// But do look at it to see how your code is intended to be used. //
//                                                                //
////////////////////////////////////////////////////////////////////

function Usage() {
  return <Counter />;
}
Usage.title = "useState: couter";

export default Usage;
