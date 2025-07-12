import express from 'express';
import {
 getMensajePorProducto,
 createMensaje,
} from '../controllers/MensajeController.js';

const router = express.Router();

router.get('/api/productos/:productoId/mensajes', getMensajePorProducto);
router.post('/api/productos/:productoId/mensajes', createMensaje);


export default router;
