import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText, Typography } from '@mui/material';
import { news } from '../data/news';

const NewsList = () => {
    return (
        <div>
            <Typography variant="h4" gutterBottom>News</Typography>
            <List>
                {news.map((newsItem) => (
                    <ListItem key={newsItem.id} component={Link} to={`/news/${newsItem.id}`} button>
                        <ListItemText
                            primary={newsItem.title}
                            secondary={`Date: ${newsItem.date}`}
                        />
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default NewsList;
