
import { DataTypes } from 'sequelize';
import sequelize from '../db/connection.js'; 

const Carrito = sequelize.define('Carrito', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true,
        autoIncrement: true
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW
    },
    idCliente: {
        type: DataTypes.INTEGER, 
        allowNull: false,
        references: {
            model: 'clientes', 
            key: 'id'
        }
    },
}, {
    tableName: 'carritos',
    timestamps: false
});

export default Carrito;