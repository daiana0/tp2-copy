import Mensaje from "../models/Mensaje.js";

// Obtener Mensaje por productoId
export const getMensajePorProducto = async (req, res) => {
  const { productoId } = req.params;
  try {
    const mensaje = await Mensaje.findAll({ where: { productoId } });
    res.status(200).json(mensaje);
  } catch (error) {
    console.error("Error al obtener mensajes:", error);
    res.status(500).json({ message: "Error al obtener mensajes" });
  }
};

// Crear nuevo Mensaje para producto especifico
export const createMensaje = async (req, res) => {
  const { productoId } = req.params;
  const { texto } = req.body;

  try {
    const nuevoMensaje = await Mensaje.create({ texto, productoId });
    res.status(201).json(nuevoMensaje);
  } catch (error) {
    console.error("Error al crear mensaje:", error);
    res.status(500).json({ message: "Error al crear mensaje" });
  }
};
