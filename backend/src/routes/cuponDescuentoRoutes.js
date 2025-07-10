import express from 'express';
import {
  getCuponesDescuento,
  getCuponDescuentoById,
  createCuponDescuento,
  updateCuponDescuento,
  deleteCuponDescuento,
  validarCupon // 👈 IMPORTAR
} from '../controllers/cuponDescuentoController.js';

const router = express.Router();

router.get('/validar/:codigoCupon', validarCupon); // 👈 NUEVA RUTA

router.get('/', getCuponesDescuento);
router.get('/:id', getCuponDescuentoById);
router.post('/', createCuponDescuento);
router.put('/:id', updateCuponDescuento);
router.delete('/:id', deleteCuponDescuento);

export default router;