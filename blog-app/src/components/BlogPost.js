import React from 'react';
import { Typography, Paper } from '@mui/material';

const BlogPost = ({ post }) => {
    if (!post) return <Typography>Select an entry to view</Typography>;

    return (
        <Paper style={{ padding: 20 }}>
            <Typography variant="h4">{post.title}</Typography>
            <Typography variant="subtitle1">Author: {post.author}</Typography>
            <Typography variant="subtitle2">Date: {post.date}</Typography>
            <Typography variant="body1">{post.content}</Typography>
        </Paper>
    );
};

export default BlogPost;
