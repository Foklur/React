import React, { useContext } from 'react';
import { ThemeContext } from './Theme';
import { CartContext } from './CartContext';

const Header = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { cart } = useContext(CartContext);

    return (
        <header className={`header ${theme}`}>
            <h1>Shop</h1>
            <button onClick={toggleTheme}>
                {theme === 'light' ? 'Night Mode' : 'Light Mode'}
            </button>
            <span>Product in basket: {cart.length}</span>
        </header>
    );
};

export default Header;
