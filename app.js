const express = require("express");
const app = express();
const sequelize= require('./database/db')
//const sequelize = require("./database/db");
const PORT = process.env.PORT || 4000;

//Middleware
//Para poder recibir info en req.body
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/posts', require('./routes/posts'));


app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);

    //Cuando nos conectamos al servidor nos conectamos a la base de datos
    /*sequelize.authenticate().then(()=>{
        console.log('Nos hemos conectado a la base de datos')
    }).catch(err=>{
        console.log('Se a producido un error', err);
    });*/

    //Sync, crear las tablas 
    //Force true: DROP TABLES
    sequelize.sync({force:true}).then(()=>{
        console.log('Nos hemos conectado a la base de datos')
    }).catch(err=>{
        console.log('Se a producido un error', err);
    })

    //Recrear las tablas con sequelize
});