import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const ProductCard = ({ product }) => {
    const { cart, addToCart, removeFromCart } = useContext(CartContext);
    const isInCart = cart.some((item) => item.id === product.id);

    return (
        <div className="product-card">
            <h2>{product.name}</h2>
            <p>{product.price} грн</p>
            {isInCart ? (
                <button onClick={() => removeFromCart(product.id)}>Delete from basket</button>
            ) : (
                <button onClick={() => addToCart(product)}>Add in basket</button>
            )}
        </div>
    );
};

export default ProductCard;
