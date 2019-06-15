import React from "react";

function Counter({ step = 1, initialCount = 0 }) {
  const [count, setCount] = React.useState(initialCount);

  const increment = () => setCount(c => c + step);

  return <button onClick={increment}>{count}</button>;
}

function Usage() {
  return <Counter />;
}

export default Usage;
