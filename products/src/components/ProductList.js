import React from 'react';
import ProductCard from './ProductCard';

const products = [
    { id: 1, name: 'Apple', price: 22 },
    { id: 2, name: 'Ball', price: 30 },
    { id: 3, name: 'Lego', price: 300 },
];

const ProductList = () => {
    return (
        <div className="product-list">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;
