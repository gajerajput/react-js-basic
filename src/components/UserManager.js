import { useState } from 'react';

function UserInput({ onUserAdd }) {
  const [name, setName] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      onUserAdd(name);
      setName("");
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder="Enter user name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Add User</button>
    </form>
  );
}

function UserDisplay({ users }) {
  return (
    <div>
      <h4>Users List:</h4>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
      <p>Total users: {users.length}</p>
    </div>
  );
}

function UserManager() {
  const [users, setUsers] = useState([]);
  
  const addUser = (newUser) => {
    setUsers([...users, newUser]);
  };
  
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>User Manager</h2>
      <p>This demonstrates lifting state up</p>
      <UserInput onUserAdd={addUser} />
      <UserDisplay users={users} />
    </div>
  );
}

export default UserManager;