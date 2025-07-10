import Categoria from '../models/Categoria.js';

// Obtener todos los categorias activos
export const getCategoriasActivas = async (req, res) => {
  try {
    const categorias = await Categoria.findAll({
      where: { activa: true }
    });
    res.json(categorias);
  } catch (error) {
    console.error('Error al obtener categorias:', error);
    res.status(500).json({ message: 'Error del servidor' });
  }
};

// Obtener categoria por ID
export const getCategoriaById = async (req, res) => {
   const { id } = req.params;
    try {
    const categoria = await Categoria.findByPk(id);

    if (!categoria) {
      return res.status(404).json({ message: 'Categoria no encontrado' });
    }

    res.json(categoria);
  } catch (error) {
    console.error('Error al obtener categoria por ID:', error);
    res.status(500).json({ message: 'Error del servidor' });
  }
};

// Crear nuevo categoria
export const createCategoria = async (req, res) => {
  try {
    const { nombre, imagenUrl, activa } = req.body;
    const nuevaCategoria = await Categoria.create({
      nombre,
      imagenUrl,
      activa: activa ?? true
    });

    return res.status(201).json(nuevaCategoria);
  } catch (error) {
    console.error('Error al crear categoria:', error);
    return res.status(500).json({ message: 'Error al crear categoria' });
  }
};

// Actualizar categoria
export const updateCategoria = async (req, res) => {
  try {
    const { id } = req.params;
    const categoria = await Categoria.findByPk(id);

    if (!categoria) {
      return res.status(404).json({ message: 'Categoria no encontrado' });
    }

    const { nombre, imagenUrl, activa } = req.body;

    await categoria.update({
      nombre,
      imagenUrl,
      activa
    });

    return res.status(200).json(categoria);
  } catch (error) {
    console.error('Error al actualizar categoria:', error);
    return res.status(500).json({ message: 'Error al actualizar categoria' });
  }
};

// Eliminar categoria 
export const deleteCategoria = async (req, res) => {
  try {
    const { id } = req.params;
    const categoria = await Categoria.findByPk(id);

    if (!categoria) {
      return res.status(404).json({ message: 'Categoria no encontrado' });
    }

    // Borrado lógico: marcar como inactivo
    await categoria.update({ activa: false });

    return res.status(200).json({ message: 'Categoria desactivado' });
  } catch (error) {
    console.error('Error al eliminar categoria:', error);
    return res.status(500).json({ message: 'Error al eliminar categoria' });
  }
};
