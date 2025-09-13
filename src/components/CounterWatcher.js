import { useState, useEffect } from 'react';

function CounterWatcher() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setMessage(`Count changed to ${count}`);
    console.log(`useEffect ran! Count is now ${count}`);
  }, [count]);

  return(
    <div style={{ textAlign: 'center' }}>
      <h2>Counter Watcher</h2>
      <p>This demonstrates useEffect with dependency</p>
      <button onClick={() => setCount(count +1)}>Count: {count}</button>
      <p>{message}</p>
    </div>
  );
}

export default CounterWatcher;