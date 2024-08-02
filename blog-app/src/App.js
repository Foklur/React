import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';
import BlogForm from './components/BlogForm';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [currentPost, setCurrentPost] = useState(null);
  const [editingPost, setEditingPost] = useState(null);

  const handleSavePost = (post) => {
    if (editingPost) {
      setPosts(posts.map(p => (p.id === post.id ? post : p)));
    } else {
      setPosts([...posts, post]);
    }
    setEditingPost(null);
  };

  const handleEditPost = (post) => {
    setEditingPost(post);
  };

  const handleDeletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  const handleViewPost = (post) => {
    setCurrentPost(post);
  };

  return (
    <Container>
      <Typography variant="h2" gutterBottom>My blog</Typography>
      <BlogForm post={editingPost} onSave={handleSavePost} />
      <BlogList posts={posts} onEdit={handleEditPost} onDelete={handleDeletePost} onView={handleViewPost} />
      <BlogPost post={currentPost} />
    </Container>
  );
}

export default App;
