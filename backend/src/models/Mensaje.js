import { DataTypes } from "sequelize";
import sequelize from "../db/connection.js";

const Mensaje = sequelize.define(
  "Mensaje",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    texto: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    productoId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Productos',
      key: 'id',
    },
    allowNull: false,
  },

  },
  {
    tableName: "Mensajes",
    timestamps: false,
  }
);

export default Mensaje;
