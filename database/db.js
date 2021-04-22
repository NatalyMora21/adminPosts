//Instancia de sequelize, con información de la base de datos
const {Sequelize} = require('sequelize');
//Trae la información de la base de datos
const {database} = require('../config');
//Se le pasa la información de la base de datos
const sequelize= new Sequelize(
    database.database,
    database.username,
    database.password,
    {
        host: database.host,
        dialect: "mysql"
    }
);
//Se exporta para realizar la conexión 
module.exports=sequelize;