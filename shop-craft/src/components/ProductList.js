import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { List, ListItem, ListItemText, Typography } from '@mui/material';
import { products } from '../data/products';

const ProductList = () => {
    const { category } = useParams();
    const filteredProducts = category ? products.filter(p => p.category === category) : products;

    return (
        <div>
            <Typography variant="h4" gutterBottom>Products</Typography>
            <List>
                {filteredProducts.map(product => (
                    <ListItem key={product.id} component={Link} to={`/product/${product.id}`} button>
                        <ListItemText primary={product.name} secondary={`Price: ${product.price} hrn`} />
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default ProductList;
