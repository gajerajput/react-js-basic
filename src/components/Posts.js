import { useState, useEffect } from 'react';

function Posts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
            .then(response => response.json())
            .then(data => {
                setPosts(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            })
    }, []);

    if(loading) return <p>Loading posts...</p>;
    if(error) return <p>Error: {error}</p>;

    return (
        <div style={{ textAlign: 'center' }}>
        <h3>Posts from API</h3>
        {posts.map(post => (
            <div key={post.id} style={{border: '1px solid #ccc', margin: '10px', padding: '10px'}}>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
            </div>
        ))}
        </div>
    );

}

export default Posts;