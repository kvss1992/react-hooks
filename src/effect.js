// useEffect: persistent state
import React from "react";

function Counter({ step = 1, initialCount = 0 }) {
  // const [count, setCount] = React.useState(
  //   Number(window.localStorage.getItem("count") || initialCount)
  // );

  //  Lazy Initialization
  const [count, setCount] = React.useState(() =>
    Number(window.localStorage.getItem("count") || initialCount)
  );
  const increment = () => setCount(c => c + step);

  //  Effect deps
  React.useEffect(() => {
    window.localStorage.setItem("count", count);
  }, [count]);
  return <button onClick={increment}>{count}</button>;
}

function Effect() {
  return <Counter />;
}
Effect.title = "useEffect: persistent state";

export default Effect;
