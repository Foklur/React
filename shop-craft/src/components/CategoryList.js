import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText, Typography } from '@mui/material';
import { products } from '../data/products';

const CategoryList = () => {
    const categories = [...new Set(products.map(p => p.category))];

    return (
        <div>
            <Typography variant="h4" gutterBottom>Category</Typography>
            <List>
                {categories.map((category, index) => (
                    <ListItem key={index} component={Link} to={`/category/${category}`} button>
                        <ListItemText primary={category} />
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default CategoryList;
