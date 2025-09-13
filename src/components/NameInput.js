import { useState } from 'react';

function NameInput() {
  const [name, setName] = useState("");
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Name Input</h2>
      <p>This demonstrates controlled input with state</p>
      <input 
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello, your name is {name}</p>
    </div>
  )
}

export default NameInput;