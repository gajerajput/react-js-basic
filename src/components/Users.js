import {Link} from 'react-router-dom';

function Users() {
    const usersList = [
        {id:1, name: 'Jhon', email: 'jhon@test.com'},
        {id:2, name: 'Jhenny', email: 'jhenny@test.com'},
        {id:3, name: 'Joe', email: 'joe@test.com'},
    ];

    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Users List</h2>
            <p>This demonstrates data users and user profile page</p> 
            <ul>
                {usersList.map(user => (
                    <li key={user.id}>
                        <Link to={`/user/${user.id}`}>{user.name} & {user.email}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Users;