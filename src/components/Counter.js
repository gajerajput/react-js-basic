import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Counter Component</h2>
      <p>This demonstrates basic state usage</p>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count+1) }>Click For +1</button>
      <button onClick={() => setCount(count-1) }>Click For -1</button>
      <button onClick={() => setCount(0) }>Start Again</button>
      {count === 0 && <p>Start clicking</p>}
      {count > 0 && count < 5 && <p>Keep going</p>}
      {count >= 5 && <p>Great you have clicked {count} times</p>}
    </div>
  );
}

export default Counter;