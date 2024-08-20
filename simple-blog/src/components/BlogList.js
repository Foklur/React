import React, { useState } from 'react';
import { List, ListItem, ListItemText, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BlogList = () => {
    const posts = useSelector((state) => state.blog);
    const [reactions, setReactions] = useState({});

    const handleReaction = (id, type) => {
        setReactions((prevReactions) => ({
            ...prevReactions,
            [id]: {
                ...prevReactions[id],
                [type]: (prevReactions[id]?.[type] || 0) + 1,
            },
        }));
    };

    return (
        <List>
            {posts.map((post) => (
                <ListItem key={post.id} component={Link} to={`/post/${post.id}`} divider>
                    <ListItemText
                        primary={post.title}
                        secondary={`Автор: ${post.author} | Дата: ${new Date(post.date).toLocaleDateString()}`}
                    />

                    <IconButton onClick={(e) => {
                        e.preventDefault();
                        handleReaction(post.id, 'like');
                    }}>
                        <span role="img">👍</span>
                        {reactions[post.id]?.like && <span style={{ marginLeft: '8px' }}>{reactions[post.id].like}</span>}
                    </IconButton>

                    <IconButton onClick={(e) => {
                        e.preventDefault();
                        handleReaction(post.id, 'dislike');
                    }}>
                        <span role="img">👎</span>
                        {reactions[post.id]?.dislike && <span style={{ marginLeft: '8px' }}>{reactions[post.id].dislike}</span>}
                    </IconButton>

                    <IconButton onClick={(e) => {
                        e.preventDefault();
                        handleReaction(post.id, 'heart');
                    }}>
                        <span role="img">❤️</span>
                        {reactions[post.id]?.heart && <span style={{ marginLeft: '8px' }}>{reactions[post.id].heart}</span>}
                    </IconButton>
                </ListItem>
            ))}
        </List>
    );
};

export default BlogList;
