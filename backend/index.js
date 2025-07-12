import express from "express";
import cors from "cors";
import morgan from "morgan";

import sequelize from "./src/db/connection.js";

import administradorRoutes from "./src/routes/administradorRoutes.js";
import categoriaRoutes from "./src/routes/categoriaRoutes.js";
import productoRoutes from "./src/routes/productoRoutes.js";
import mensajeRoutes from "./src/routes/mensajeRoutes.js";
import clienteRoutes from "./src/routes/clienteRoutes.js";
import direccionRoutes from "./src/routes/direccionRoutes.js";
import carritoRoutes from "./src/routes/carritoRoutes.js";
import carritoProductoRoutes from "./src/routes/carritoProductoRoutes.js";
import pedidoRoutes from "./src/routes/pedidoRoutes.js";
import pedidoProductoRoutes from "./src/routes/pedidoProductoRoutes.js";
import pagoRoutes from "./src/routes/pagoRoutes.js";
import envioRoutes from "./src/routes/envioRoutes.js";
import cuponDescuentoRoutes from "./src/routes/cuponDescuentoRoutes.js";
import varianteRoutes from "./src/routes/varianteRoutes.js";

const app = express();
const PORT = process.env.PORT || 3001;

const RESET_DATABASE = false;

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/categorias", categoriaRoutes);
app.use("/api/administradores", administradorRoutes);
app.use("/api/carritos", carritoRoutes);
app.use("/api/carritosproductos", carritoProductoRoutes);
app.use("/api/clientes", clienteRoutes);
app.use("/api/direcciones", direccionRoutes);
app.use("/api/envios", envioRoutes);
app.use("/api/pagos", pagoRoutes);
app.use("/api/pedidos", pedidoRoutes);
app.use("/api/pedidosproductos", pedidoProductoRoutes);
app.use("/api/productos", productoRoutes);
app.use("/api/cupones", cuponDescuentoRoutes);
app.use(mensajeRoutes);
app.use(varianteRoutes);

// Sincronización con DB
const syncOptions = RESET_DATABASE ? { force: true } : {};

sequelize
  .sync(syncOptions)
  .then(() => {
    console.log("Base de datos conectada y sincronizada");
    // if (RESET_DATABASE) return seedDatabase();
    return Promise.resolve();
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error al iniciar el servidor:", err);
  });
