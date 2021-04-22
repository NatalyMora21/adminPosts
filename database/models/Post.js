const {Model, DataTypes}= require('sequelize');
//Conexión de sequelize con la base de datos
const sequelize = require('../db');

//Creamos la clase user que hereda de models
class Post extends Model{}

Post.init({
    title:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            notNull:{
                msg: "The post title cannot be null"
            },
            len:{
                args:[3, 255],
                msg:"The title of the post must be between 3 and 100 characters"
            }
        }
    } ,
    body:{
        type:DataTypes.TEXT,
        allowNull:false,
        validate:{
            notNull:{
                msg: "The context of the post must not be empty"
            },
        }
    } ,
    image:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            notNull:{
                msg: "The image field cannot be empty"
            }
        }
    }
},{
    sequelize,
    modelName: "post"
})

module.exports= Post;