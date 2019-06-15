// useEffect: persistent state
import React from "react";

function useLocalStorageState({
  key,
  initialValue,
  serialize = v => v,
  deserialize = v => v
}) {
  const [state, setState] = React.useState(() =>
    deserialize(window.localStorage.getItem(key) || initialValue)
  );

  const serializeState = serialize(state);
  React.useEffect(() => {
    window.localStorage.setItem(key, setState);
  }, [key, serializeState]);

  return [state, setState];
}

function useLocalStorageCounter({ step = 1, initialCount = 0, key = "count" }) {
  const [count, setCount] = useLocalStorageState({
    key,
    initialCount,
    deserialize: v => Number(v)
  });

  const increment = () => setCount(c => c + step);

  return [count, increment];
}
function Counter({ step, initialCount }) {
  const [count, increment] = useLocalStorageCounter({ step, initialCount });

  return <button onClick={increment}>{count}</button>;
}

function Effect() {
  return <Counter />;
}
Effect.title = "useEffect: persistent state";

export default Effect;
