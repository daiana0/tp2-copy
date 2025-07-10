import express from 'express';
import {
  getCarritos,
  getCarritoById,
  createCarrito,
  updateCarrito,
  deleteCarrito
} from '../controllers/carritoController.js';

const router = express.Router();

router.get('/', getCarritos);
router.get('/:id', getCarritoById);
router.post('/', createCarrito);
router.put('/:id', updateCarrito);
router.delete('/:id', deleteCarrito);

export default router;
