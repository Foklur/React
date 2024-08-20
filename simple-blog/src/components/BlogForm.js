import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { TextField, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addPost, updatePost } from './blogSlice';

const BlogForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const post = useSelector((state) => state.blog.find((p) => p.id === id));

    const [title, setTitle] = useState(post ? post.title : '');
    const [author, setAuthor] = useState(post ? post.author : '');
    const [content, setContent] = useState(post ? post.content : '');

    useEffect(() => {
        if (post) {
            setTitle(post.title);
            setAuthor(post.author);
            setContent(post.content);
        }
    }, [post]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (id) {
            dispatch(updatePost({ id, title, author, content }));
        } else {
            dispatch(addPost(title, author, content));
        }
        navigate('/');
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Name"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                fullWidth
                margin="normal"
                multiline
                rows={4}
            />
            <Button variant="contained" color="primary" type="submit">
                {id ? 'Update' : 'Add'}
            </Button>
        </form>
    );
};

export default BlogForm;
