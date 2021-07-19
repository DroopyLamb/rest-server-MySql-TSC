import { Sequelize } from 'sequelize';


// Parámetros: 
// DB nombre
// Usuario
// password
const db = new Sequelize('node', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb',
    // muestra el squl en la consola, por defecto logging es true
    //logging: false 

});

export default db;