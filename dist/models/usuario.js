"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Usuario = connection_1.default.define('Usuario', {
    nombre: {
        type: sequelize_1.DataTypes.STRING,
        // Que el campo no sea nulo
        allowNull: false
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        // Que el campo no sea nulo
        allowNull: false
    },
    estado: {
        type: sequelize_1.DataTypes.TINYINT,
        // Estado por default
        defaultValue: 1
    }
});
exports.default = Usuario;
//# sourceMappingURL=usuario.js.map