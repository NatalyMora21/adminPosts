//One to many
//User has many transactions
const Category= require('./models/Category');
const Post= require('./models/Post');
//Se añade una clave user id a la tabla transactions

Category.hasMany(Post);
Post.belongsTo(Category);

//User Id to the table transactions
 


