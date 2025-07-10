
import { DataTypes } from 'sequelize';
import sequelize from '../db/connection.js'; 

const CuponDescuento = sequelize.define('CuponDescuento', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombreCupon: {
        type: DataTypes.STRING,
        allowNull: false,
 },
    codigoCupon: {
        type: DataTypes.STRING,
        allowNull: false,
        unique : true,
        
    },
    porcentajeDescuento: {
        type: DataTypes.INTEGER, 
        allowNull: false,
         validate: {
      min: 0,
      max: 100
    }
    },
    activo: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
                
    },
}, {
    tableName: 'cupones',
    timestamps: false
});

export default CuponDescuento;