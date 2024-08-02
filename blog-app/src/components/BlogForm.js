import React, { useState, useEffect } from 'react';
import { TextField, Button, Paper } from '@mui/material';

const BlogForm = ({ post, onSave }) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        if (post) {
            setTitle(post.title);
            setAuthor(post.author);
            setContent(post.content);
        }
    }, [post]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({ title, author, content, date: new Date().toLocaleDateString(), id: post ? post.id : Date.now() });
        setTitle('');
        setAuthor('');
        setContent('');
    };

    return (
        <Paper style={{ padding: 20, marginBottom: 20 }}>
            <form onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    label="Name"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    margin="normal"
                />
                <TextField
                    fullWidth
                    label="Author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    margin="normal"
                />
                <TextField
                    fullWidth
                    label="Content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    margin="normal"
                    multiline
                />
                <Button type="submit" variant="contained" color="primary" style={{ marginTop: 20 }}>
                    Save
                </Button>
            </form>
        </Paper>
    );
};

export default BlogForm;
