import { useState } from 'react';

function Greeting({name, age}) {
  return (
    <div>
      <h2>Hello {name}</h2>
      <p>You are {age} year old</p>
      {age >18 ? <p>You are ok to vote</p> : <p>You are too young to vote</p>}
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
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

function NameInput() {
  const [name, setName] = useState("");
  return (
    <div>
      <input 
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello, your name is {name}</p>
    </div>
  )
}


function UserProfile() {
  const [name, setName] = useState("");
  const [clickCount, setClickCount] = useState(0);
  return (
    <div>
      <input 
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setClickCount(clickCount + 1)}>
        Click Count: {clickCount}
      </button>
      <p>{name || 'New user'} you have clicked {clickCount} times</p>
    </div>
  )
}

function ChildComponent({ onNameChange }) {
    const [inputValue, setInputValue] = useState("");
    
    const handleSubmit = () => {
        onNameChange(inputValue);
        setInputValue("");
    };

    return (
      <div>
        <h4>Child Component</h4>
        <input 
          type='text'
          placeholder='Enter name here'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={handleSubmit}>Send to Parent</button>
      </div>
    )
}


function ParentComponent() {
  const [receivedName, setReceivedName] = useState("No name yet");
  const [nameCount, setNameCount] = useState(0);

  const handleNameChange = (newName) => {
    setReceivedName(newName);
    setNameCount(nameCount + 1);
  };

  return( 
    <div>
      <h3>Patent Component</h3>
      <p>Name received from child {receivedName}</p>
      <p>Names received: {nameCount}</p>
      <ChildComponent onNameChange={handleNameChange} />
    </div>
  );
}

function NameList() {

  const names = ['Jhon', 'Jhenny', 'Joe'];

  return(
    <div>
      <h3>Name List</h3>
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  )
}

function AddDeleteNameList() {
  const [names, setNames] = useState(['Apple', 'Boy', 'Cat']);
  const [newName, setNewName] = useState('');

  const addName= () => {
    setNames([...names, newName]);
    setNewName('');
  }

  const deleteName = (nameToDelete) => {
    setNames(names.filter(name => name !== nameToDelete));
  };

  return (
      <div>
        <h3>Add New Name In List</h3>
        <input 
          type='text'
          placeholder='Add new name'
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />

        <button onClick={addName}>Add New Name</button>

        <ul>
          {names.map((name) => (
            <li key={name}>
              {name} 
              <button onClick={() => deleteName(name)}>Delete</button>
            </li>
          ))}
        </ul>

      </div>
  );
}

function App() {
  return (
    <div>
      <h1>My first react app</h1>
      <p><u>Prop Example</u></p>
      <Greeting name="Jhon" age={23}/>
      <Greeting name="Jhenny" age={17}/>
      <p><u>State Example</u></p>
      <Counter/>
      <p><u>Text Input With State</u></p>
      <NameInput/>
      <p><u>Text Input & Count With State</u></p>
      <UserProfile/>
      <p><u>Parent Child Component Example</u></p>
      <ParentComponent/>
      <p><u>Rendering Lists</u></p>
      <NameList/>
      <p><u>Rendering Lists And & Delete Add Name</u></p>
      <AddDeleteNameList/>
    </div>
  );
}

export default App;