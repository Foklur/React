import './App.css';
import React from 'react';
import { ThemeProvider } from './components/Theme';
import { CartProvider } from './components/CartContext';
import Header from './components/Header';
import ProductList from './components/ProductList';


function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <div className="app">
          <Header />
          <ProductList />
        </div>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
