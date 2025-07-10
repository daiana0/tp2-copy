import sequelize from './src/db/connection.js';

import Categoria from './Categoria.js';
import Administrador from './Administrador.js';
import Carrito from './Carrito.js';
import CarritoProducto from './CarritoProducto.js';
import Cliente from './Cliente.js';
import Direccion from './Direccion.js';
import Envio from './Envio.js';
import Pago from './Pago.js';
import Pedido from './Pedido.js';
import PedidoProducto from './PedidoProducto.js';
import Producto from './Producto.js';
import CuponDescuento from './CuponDescuento.js';


Cliente.hasMany(Direccion, {
  foreignKey: 'idCliente',
});
Direccion.belongsTo(Cliente, {
  foreignKey: 'idCliente',
});


Cliente.hasMany(Pedido, {
  foreignKey: 'idCliente',
});
Pedido.belongsTo(Cliente, {
  foreignKey: 'idCliente',
});


Cliente.hasOne(Carrito, {
  foreignKey: 'idCliente',
  onDelete: 'CASCADE',
});
Carrito.belongsTo(Cliente, {
  foreignKey: 'idCliente',
});


Administrador.hasMany(Producto, {
  foreignKey: 'idAdministrador',
});
Producto.belongsTo(Administrador, {
  foreignKey: 'idAdministrador',
});


Categoria.hasMany(Producto, {
  foreignKey: 'idCategoria',
});
Producto.belongsTo(Categoria, {
  foreignKey: 'idCategoria',
});


Pedido.hasOne(Pago, {
  foreignKey: 'idPedido',
  onDelete: 'CASCADE',
});
Pago.belongsTo(Pedido, {
  foreignKey: 'idPedido',
});


Pedido.hasOne(Envio, {
  foreignKey: 'idPedido',
  onDelete: 'CASCADE',
});
Envio.belongsTo(Pedido, {
  foreignKey: 'idPedido',
});


Pedido.belongsToMany(Producto, {
  through: PedidoProducto,
  foreignKey: 'idPedido',
  otherKey: 'idProducto',
});
Producto.belongsToMany(Pedido, {
  through: PedidoProducto,
  foreignKey: 'idProducto',
  otherKey: 'idPedido',
});


Carrito.belongsToMany(Producto, {
  through: CarritoProducto,
  foreignKey: 'idCarrito',
  otherKey: 'idProducto',
});
Producto.belongsToMany(Carrito, {
  through: CarritoProducto,
  foreignKey: 'idProducto',
  otherKey: 'idCarrito',
});


export {
  sequelize,
  Categoria,
  Administrador,
  Carrito,
  CarritoProducto,
  Cliente,
  Direccion,
  Envio,
  Pago,
  Pedido,
  PedidoProducto,
  Producto,
  CuponDescuento
};
