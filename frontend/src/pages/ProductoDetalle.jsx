import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const ProductoDetalle = () => {
  const { id } = useParams(); // ← obtengo el id del producto
  const [producto, setProducto] = useState(null);
  const [mensajes, setMensajes] = useState([]);
  const [nuevoMensaje, setNuevoMensaje] = useState("");
  const [variantes, setVariantes] = useState([])

  // Traer el producto
  useEffect(() => {
    axios.get(`http://localhost:3001/api/productos/${id}`)
      .then((res) => setProducto(res.data))
      .catch((err) => console.error("Error producto", err));
  }, [id]);

  // Traer los mensajes
  useEffect(() => {
    axios.get(`http://localhost:3001/api/productos/${id}/mensajes`)
      .then((res) => setMensajes(res.data))
      .catch((err) => console.error("Error mensajes", err));
  }, [id]);

  // Traer las variantes
  useEffect(() => {
    axios.get(`http://localhost:3001/api/productos/${id}/variantes`)
      .then((res) => setVariantes(res.data))
      .catch((err) => console.error("Error en traer variante", err));
  }, [id]);

  const enviarMensaje = () => {
    if (!nuevoMensaje.trim()) return;

    axios.post(`http://localhost:3001/api/productos/${id}/mensajes`, {
      texto: nuevoMensaje
    })
    .then((res) => {
      setMensajes([...mensajes, res.data]); // Agrego nuevo mensaje al final
      setNuevoMensaje(""); // Limpio input
    })
    .catch((err) => console.error("Error enviando mensaje", err));
  };

  if (!producto) return <p>Cargando producto...</p>;

  return (
    <Box sx={{ p: 3, backgroundColor: "white"}}>
      <Typography variant="h4" gutterBottom>
        {producto.nombre}
      </Typography>
      <Typography variant="h6" color="text.secondary">
        Precio: ${producto.precio.toFixed(2)}
      </Typography>
      
{/* 📝 Lista de variantes */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6">Variantes disponibles:</Typography>
        {variantes.length === 0 ? (
          <Typography variant="body2">No hay variantes para este producto.</Typography>
        ) : (
        <ul>
          {variantes.map((variante) => (
            <li
              key={variante.id}
              style={{
                color: variante.stock === 0 ? 'red' : 'black',
                fontStyle: variante.stock === 0 ? 'italic' : 'normal',
              }}
            >
              {variante.nombre} | Precio: ${variante.precio} | Stock: {variante.stock} unidades
              {variante.stock === 0 && ' (No disponible)'}
            </li>
          ))}
        </ul>
        )}
      </Box>
      {/* 📝 Lista de mensajes */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6">Mensajes del producto:</Typography>
        {mensajes.length === 0 ? (
          <Typography variant="body2">No hay mensajes.</Typography>
        ) : (
          mensajes.map((msg, i) => (
            <Typography key={i} variant="body2" sx={{ my: 1 }}>
              • {msg.texto}
            </Typography>
          ))
        )}
      </Box>
      

      {/* 💬 Formulario de nuevo mensaje */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="subtitle1">Escribir un nuevo mensaje:</Typography>
        <TextField
          value={nuevoMensaje}
          onChange={(e) => setNuevoMensaje(e.target.value)}
          fullWidth
          multiline
          rows={2}
          placeholder="Escribe tu mensaje..."
          sx={{ mt: 1 }}
        />
        <Button
          onClick={enviarMensaje}
          variant="contained"
          color="primary"
          sx={{ mt: 1 }}
        >
          Enviar Mensaje
        </Button>
      </Box>
    </Box>
  );
};

export default ProductoDetalle;