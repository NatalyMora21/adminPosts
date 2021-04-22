const {Model, DataTypes}= require('sequelize');
//Conexión de sequelize con la base de datos
const sequelize = require('../db');

//Creamos la clase user que hereda de models
class Category extends Model{}

Category.init({
    name:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            notNull:{
                msg: "El titulo no puede ser nulo"
            },
            isAlphanumeri:{
                args:true,
                msg:"El nombre debe contener ..."
            },
            len:{
                args:[3, 255],
                msg:"El nombre debe tener entre 3 y 255 caracteres ..."
            }
        }
    } ,
    identifier: { 
        type: DataTypes.STRING, 
        allowNull:false,
        primaryKey: true,
        validate:{
            notNull:{
                msg: "El Id no debe ser nulo"
            },
            isAlpha:{
                args:true,
                msg:"El nombre debe contener solo letras"
            },
            len:{
                args:[2, 3],
                msg:"El nombre debe tener entre 2 y 3 caracteres ..."
            }
        }
     }
},{
    sequelize,
    modelName: "category"
})

module.exports= Category;
 
 
 
 
