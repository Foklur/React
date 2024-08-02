import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Container, Grid } from '@mui/material';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import CategoryList from './components/CategoryList';
import NewsList from './components/NewsList';
import NewsDetail from './components/NewsDetail';
import './App.css';

function App() {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Routes>
            <Route path="/" element={<CategoryList />} />
            <Route path="/category/:category" element={<ProductList />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
            <Route path="/news/:newsId" element={<NewsDetail />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Grid>
        <Grid item xs={12} md={4}>
          <NewsList />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
