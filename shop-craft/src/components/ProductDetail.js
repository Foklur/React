import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Paper } from '@mui/material';
import { products } from '../data/products';

const ProductDetail = () => {
    const { productId } = useParams();
    const product = products.find(p => p.id === parseInt(productId));

    if (!product) {
        return <Typography>Product not found!!</Typography>;
    }

    return (
        <Paper style={{ padding: 20 }}>
            <Typography variant="h4">{product.name}</Typography>
            <Typography variant="subtitle1">Category: {product.category}</Typography>
            <Typography variant="body1">{product.description}</Typography>
            <Typography variant="h6">Price: {product.price} грн</Typography>
        </Paper>
    );
};

export default ProductDetail;
