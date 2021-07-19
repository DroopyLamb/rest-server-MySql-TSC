import { DataTypes } from "sequelize";
import db from "../db/connection";


const Usuario = db.define('Usuario', {

    nombre: {
        type: DataTypes.STRING,
        // Que el campo no sea nulo
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        // Que el campo no sea nulo
        allowNull: false
    },
    estado: {
        type: DataTypes.TINYINT,
        // Estado por default
        defaultValue: 1
    }
});

export default Usuario;