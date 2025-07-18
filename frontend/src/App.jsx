import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Routes, Route } from 'react-router-dom';
import theme from './theme';
import Home from './pages/Home';
import Categoria from './pages/Categoria';
import DetalleCategoria from './pages/DetalleCategoria';
import ProductoDetalle from './pages/ProductoDetalle';
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/categorias" element={<Categoria/>}/>
        <Route path="/categorias/:id" element={<DetalleCategoria/>}/>
        <Route path="/producto/:id" element={<ProductoDetalle/>}/>
        
      </Routes>
      
    </ThemeProvider>
  );
};

export default App;
