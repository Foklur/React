import React from 'react';
import { List, ListItem, ListItemText, Button } from '@mui/material';

const BlogList = ({ posts, onEdit, onDelete, onView }) => {
    return (
        <List>
            {posts.map((post, index) => (
                <ListItem key={index} button>
                    <ListItemText
                        primary={post.title}
                        secondary={`Автор: ${post.author} | Дата: ${post.date}`}
                        onClick={() => onView(post)}
                    />
                    <Button onClick={() => onEdit(post)}>Edit</Button>
                    <Button onClick={() => onDelete(post.id)}>Delete</Button>
                </ListItem>
            ))}
        </List>
    );
};

export default BlogList;