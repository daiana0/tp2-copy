
import { DataTypes } from 'sequelize';
import sequelize from '../db/connection.js'; 

const Direccion = sequelize.define('Direccion', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true,
        autoIncrement: true
    },
    calle: {
        type: DataTypes.STRING,
        allowNull: false
    },
    numeracion: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    ciudad: {
        type: DataTypes.STRING,
        allowNull: true
    },
    provincia: {
        type: DataTypes.STRING,
        allowNull: true
    },
    codigo_postal: {
        type: DataTypes.INTEGER,
        allowNull: true
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
    tableName: 'direcciones',
    timestamps: false
});

export default Direccion;