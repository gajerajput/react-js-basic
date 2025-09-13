import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
 
import Home from './components/Home';
import Prop from './components/Prop'; 
import Greeting from './components/Greeting';
import CounterWatcher from './components/CounterWatcher';
import Counter from './components/Counter';
import NameInput from './components/NameInput';
import ContactForm from './components/ContactForm';
import UserManager from './components/UserManager';
import Users from './components/Users';
import UserProfile from './components/UserProfile';
import DummyApi from './components/DummyApi';
import Posts from './components/Posts';
import PostManager from './components/PostManager';



function App() {
  return (
     <Router>
      <div>
        <h3 style={{ textAlign: 'center' }}>Welcome To React Js</h3>
        <p style={{ textAlign: 'center' }}>Basic React Example How It Works</p>
        <nav style={{ textAlign: 'center' }}>
          <Link to="/">Home</Link>{' '}
          <Link to="/prop">Prop</Link>{' '} 
          <Link to="/greeting">Greeting</Link>{' '}
          <Link to="/counter-watcher">Counter Watcher</Link>{' '}
          <Link to="/counter">Counter</Link>{' '}
          <Link to="/name-input">Name Input</Link>{' '}
          <Link to="/contact-form">Contact Form</Link>{' '}
          <Link to="/users">Users</Link>{' '}
          <Link to="/user-manager">User Manager</Link>{' '}          
          <Link to="/dummy-api">Dummy API</Link>{' '}
          <Link to="/posts">Retrive Post From API</Link>{' '}
          <Link to="/post-add">Add Post From API</Link>           
        </nav>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/prop" element={<Prop/>}/> 
          <Route path="/greeting" element={<Greeting/>}/>
          <Route path="/counter-watcher" element={<CounterWatcher/>}/>
          <Route path="/counter" element={<Counter/>}/>
          <Route path="/name-input" element={<NameInput/>}/>
          <Route path="/contact-form" element={<ContactForm/>}/>
          <Route path="/user-manager" element={<UserManager/>}/>
          <Route path="/users" element={<Users />} />
          <Route path="/user/:userId" element={<UserProfile />} />
          <Route path="/dummy-api" element={<DummyApi/>}/>
          <Route path="/posts" element={<Posts/>}/>
          <Route path="/post-add" element={<PostManager/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;