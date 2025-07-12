import Variante from "../models/Variante.js";

// Obtener Variante por productoId
export const getVariantePorProducto = async (req, res) => {
  const { productoId } = req.params;
  try {
    const variante = await Variante.findAll({ where: { productoId } });
    res.status(200).json(variante);
  } catch (error) {
    console.error("Error al obtener variante:", error);
    res.status(500).json({ message: "Error al obtener variante" });
  }
};