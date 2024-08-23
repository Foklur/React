import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import PostPage from './components/PostPage';
import NewPostPage from './components/NewPostPage';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);

  const handleAddPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="App">
      <nav>
        <Link to="/posts">Home</Link>
        <Link to="/posts/newPost">Add new post</Link>
      </nav>
      <Routes>
        <Route path="/posts" element={<HomePage posts={posts} />} />
        <Route path="/posts/:id" element={<PostPage />} />
        <Route path="/posts/newPost" element={<NewPostPage onAddPost={handleAddPost} />} />
      </Routes>
    </div>
  );
}

export default App;
