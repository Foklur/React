import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { deletePost } from './blogSlice';

const BlogPost = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const post = useSelector((state) => state.blog.find((p) => p.id === id));

    if (!post) return <Typography>Not Found</Typography>;

    const handleDelete = () => {
        dispatch(deletePost(id));
        navigate('/');
    };

    return (
        <div>
            <Typography variant="h4">{post.title}</Typography>
            <Typography variant="subtitle1">
                Author: {post.author} | Date: {new Date(post.date).toLocaleDateString()}
            </Typography>
            <Typography variant="body1">{post.content}</Typography>
            <Button variant="contained" color="primary" component={Link} to={`/edit/${post.id}`}>
                Edit
            </Button>
            <Button variant="contained" color="secondary" onClick={handleDelete}>
                Delete
            </Button>
        </div>
    );
};

export default BlogPost;
