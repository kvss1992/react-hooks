// useEffect: persistent state
import React from "react";

function useLocalStorageCounter({ step = 1, initialCount = 0, key = "count" }) {
  const [count, setCount] = React.useState(() =>
    Number(window.localStorage.getItem("count") || initialCount)
  );

  const increment = () => setCount(c => c + step);

  React.useEffect(() => {
    window.localStorage.setItem("count", count);
  });

  return [count, increment];
}
function Counter({ step = 1, initialCount = 0 }) {
  const [count, increment] = useLocalStorageCounter(step, initialCount);

  return <button onClick={increment}>{count}</button>;
}

function Effect() {
  return <Counter />;
}
Effect.title = "useEffect: persistent state";

export default Effect;
