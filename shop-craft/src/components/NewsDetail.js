import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Paper } from '@mui/material';
import { news } from '../data/news';

const NewsDetail = () => {
    const { newsId } = useParams();
    const newsItem = news.find(n => n.id === parseInt(newsId));

    if (!newsItem) {
        return <Typography>News not found</Typography>;
    }

    return (
        <Paper style={{ padding: 20 }}>
            <Typography variant="h4">{newsItem.title}</Typography>
            <Typography variant="subtitle2">Date: {newsItem.date}</Typography>
            <Typography variant="body1">{newsItem.content}</Typography>
        </Paper>
    );
};

export default NewsDetail;
