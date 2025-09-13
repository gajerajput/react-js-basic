import { useState, useEffect } from 'react';

function UserProfileWithData() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(()=> {
    setTimeout(() => {
      const userData = {
        id: 1,
        name: "John Doe",
        email: "john@example.com"
      };
      setUser(userData);
      setLoading(false);
      console.log("User data received!");
    }, 2000);
  }, []);

  if(loading) {
    return(
      <div style={{ textAlign: 'center' }}>
        <h2>User Profile</h2>
        <p>Waiting for data...</p>
      </div>
    );
  }

  return(
    <div style={{ textAlign: 'center' }}>
      <h2>User Profile</h2>
      <p>This demonstrates data fetching simulation</p>
      <h3>User profile information</h3>
      <p>Name : {user.name}</p>
      <p>Email : {user.email}</p>
    </div>
  )
}

export default UserProfileWithData;