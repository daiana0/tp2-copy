import express from 'express';
import {
 getVariantePorProducto,
 
} from '../controllers/varianteController.js';

const router = express.Router();

router.get('/api/productos/:productoId/variantes', getVariantePorProducto);


export default router;