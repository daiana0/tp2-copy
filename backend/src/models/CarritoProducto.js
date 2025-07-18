
import { DataTypes } from 'sequelize';
import sequelize from '../db/connection.js'; 

const CarritoProducto = sequelize.define('CarritoProducto', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true,
        autoIncrement: true
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    idProducto: {
        type: DataTypes.INTEGER, 
        allowNull: false,
        references: {
            model: 'productos', 
            key: 'id'
        }
    },
    idCarrito: {
        type: DataTypes.INTEGER, 
        allowNull: false,
        references: {
            model: 'carritos', 
            key: 'id'
        }
    },
}, {
    tableName: 'carritosproductos',
    timestamps: false
});

export default CarritoProducto;