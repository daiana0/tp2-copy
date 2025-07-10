import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import Box from '@mui/material/Box';

const ProductList = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/api/productos')
      .then((response) => {
        setProductos(response.data); // Suponiendo que tu back devuelve un array
      })
      .catch((error) => {
        console.error('Error al obtener productos:', error);
      });
  }, []);

  
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
  {productos.map((producto) => {
    console.log(producto);
    return <ProductCard key={producto.id} producto={producto} />;
  })}
</Box>

  );
};

export default ProductList;
