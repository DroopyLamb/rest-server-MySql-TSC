"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
// Parámetros: 
// DB nombre
// Usuario
// password
const db = new sequelize_1.Sequelize('node', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb',
    // muestra el squl en la consola, por defecto logging es true
    //logging: false 
});
exports.default = db;
//# sourceMappingURL=connection.js.map