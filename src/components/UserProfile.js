import { useParams } from 'react-router-dom';

function UserProfile() {
  const { userId } = useParams();
  
    const users = {
        1: {name: 'Jhon', email: 'jhon@test.com'},
        2: {name: 'Jhenny', email: 'jhenny@test.com'},
        3: {name: 'Joe', email: 'joe@test.com'}
    }

    const user = users[userId];

    if(!user) {
        return (
            <div>
                <h3>User not found</h3>
            </div>
        );
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <h2>User Profile Page & Route Parameters</h2>
            <p>This demonstrates data user route parameter</p> 
            <p><strong>ID:</strong> {userId}</p>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
        </div>
    );

}

export default UserProfile;