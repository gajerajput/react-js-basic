import { useState, useEffect } from 'react';

function PostManager() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [creating, setCreating] = useState(false);
   
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
      .then(response => response.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      });
  }, []);
   
  const createPost = (e) => {
    e.preventDefault();
    setCreating(true);
    
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: title,
        body: body,
        userId: 1
      })
    })
    .then(response => response.json())
    .then(newPost => {
      setPosts([newPost, ...posts]);  
      setTitle("");
      setBody("");
      setCreating(false);
      console.log('Post created:', newPost);
    });
  };
  
  if (loading) return <p>Loading...</p>;
  
  return (
    <div style={{ textAlign: 'center' }}>
      <h3>Posts Manager</h3>
       
      <form onSubmit={createPost} style={{border: '1px solid #ddd', padding: '15px', margin: '10px'}}>
        <h4>Create New Post</h4>
        <input 
          type="text"
          placeholder="Post title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <br /><br />
        <textarea 
          placeholder="Post content"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />
        <br /><br />
        <button type="submit" disabled={creating}>
          {creating ? 'Creating...' : 'Create Post'}
        </button>
      </form>
       
      <div>
        {posts.map(post => (
          <div key={post.id} style={{border: '1px solid #ccc', margin: '10px', padding: '10px'}}>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostManager;