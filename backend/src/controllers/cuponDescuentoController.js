import CuponDescuento from '../models/CuponDescuento.js';

// Obtener todos los cupones de descuento
export const getCuponesDescuento = async (req, res) => {
  try {
    const cupones = await CuponDescuento.findAll();
    return res.status(200).json(cupones);
  } catch (error) {
    console.error('Error al obtener cupones de descuento:', error);
    return res.status(500).json({ message: 'Error al obtener cupones de descuento' });
  }
};

// Obtener un cupón por ID
export const getCuponDescuentoById = async (req, res) => {
  try {
    const { id } = req.params;
    const cupon = await CuponDescuento.findByPk(id);

    if (!cupon) {
      return res.status(404).json({ message: 'Cupón no encontrado' });
    }

    return res.status(200).json(cupon);
  } catch (error) {
    console.error('Error al obtener cupón por ID:', error);
    return res.status(500).json({ message: 'Error al obtener cupón de descuento' });
  }
};
// Validar cupón por código
export const validarCupon = async (req, res) => {
  try {
    const { codigoCupon } = req.params;

    const cupon = await CuponDescuento.findOne({
      where: { codigoCupon }
    });

    if (!cupon || !cupon.activo) {
      return res.status(404).json({ message: 'Cupón inválido o inactivo' });
    }

    return res.status(200).json(cupon);
  } catch (error) {
    console.error('Error al validar cupón:', error);
    return res.status(500).json({ message: 'Error al validar cupón' });
  }
};


// Crear un nuevo cupón
export const createCuponDescuento = async (req, res) => {
  try {
    const { nombreCupon, codigoCupon, porcentajeDescuento, activo } = req.body;

    const nuevoCupon = await CuponDescuento.create({
      nombreCupon,
      codigoCupon,
      porcentajeDescuento,
      activo
    });

    return res.status(201).json(nuevoCupon);
  } catch (error) {
    console.error('Error al crear cupón de descuento:', error);
    return res.status(500).json({ message: 'Error al crear cupón de descuento' });
  }
};

// Actualizar un cupón
export const updateCuponDescuento = async (req, res) => {
  try {
    const { id } = req.params;
    const cupon = await CuponDescuento.findByPk(id);

    if (!cupon) {
      return res.status(404).json({ message: 'Cupón no encontrado' });
    }

    const { nombreCupon, codigoCupon, porcentajeDescuento, activo } = req.body;

    await cupon.update({
      nombreCupon,
      codigoCupon,
      porcentajeDescuento,
      activo
    });

    return res.status(200).json(cupon);
  } catch (error) {
    console.error('Error al actualizar cupón:', error);
    return res.status(500).json({ message: 'Error al actualizar cupón de descuento' });
  }
};

// Eliminar un cupón
export const deleteCuponDescuento = async (req, res) => {
  try {
    const { id } = req.params;
    const cupon = await CuponDescuento.findByPk(id);

    if (!cupon) {
      return res.status(404).json({ message: 'Cupón no encontrado' });
    }

    await cupon.destroy();
    return res.status(200).json({ message: 'Cupón eliminado correctamente' });
  } catch (error) {
    console.error('Error al eliminar cupón:', error);
    return res.status(500).json({ message: 'Error al eliminar cupón de descuento' });
  }
};
