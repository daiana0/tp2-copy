
import { DataTypes } from 'sequelize';
import sequelize from '../db/connection.js';

const Variante = sequelize.define('Variante', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        },
    precio: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        
    },
    
    productoId: {
        type: DataTypes.INTEGER, 
        allowNull: false,
        references: {
            model: 'productos', 
            key: 'id'
        }
    },
}, {
    tableName: 'Variantes',
    timestamps: false
});

export default Variante;