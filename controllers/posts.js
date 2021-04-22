const Post = require("../database/models/Post");
const Category = require("../database/models/Category");
require('../database/asociations');

//Function ALL posts
const allposts = async (req, res) => {
  try {
    const allPosts = await Post.findAll({
      attributes: ["id", "title", "image","categoryIdentifier"],
    });
    res.status(202).json(allPosts);
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

//Function ONE posts
const oneposts = async (req, res) => {
  const idPosts = req.params.id;

  try {
    const onePosts = await Post.findAll({
      where: {
        id: idPosts,
      },
    });
    if (onePosts.length > 0) {
      res.status(202).json(onePosts);
    } else {
      res.status(404).json({ err: "Post not found" });
    }
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

//Function CREATE posts
const createposts = async (req, res) => {
  const { title, body, image, category } = req.body;
  try {
    const newPosts = await Post.create({
      title,
      body,
      image,
      category,
    });
    res
      .status(201)
      .json({ message: "A new post has been created successfully", newPosts });
  } catch (e) {
    res.status(500).json(e);
  }
};

//Function UPDATE posts
const updateposts = async (req, res) => {
  //Validar si se puede consultar a la llave primaria
  const idPosts = req.params.id;
  const { title, body, image, category } = req.body;

  //1.Pasar los campos que se quieren editar
  try {
    const updatePosts = await Post.update(
      {
        title,
        body,
        image,
      },
      {
        where: {
          id: idPosts,
        },
      }
    );
    console.log(updatePosts[0]);

    if (updatePosts[0] == 0) {
      res.status(404).json({ err: "Post not found" });
    } else {
      res
        .status(201)
        .json({ message: "The post has been updated", updatePosts });
    }
  } catch (e) {
    res.status(500).json(e);
  }

  //filas afectadas
};

//Function DELETE posts
const deletepost = async (req, res) => {
  const idPosts = req.params.id;
  try {
    let deletePost = await Post.destroy({
      where: {
        id: idPosts,
      },
    });
    console.log(deletePost);
    if(deletePost==0){
        res.status(404).json({ message: "Post not found"});
    }
    else{
        res.status(200).json({ message: "The post has been delete"});
    }
    

  } catch (e) {
    res.status(500).json(e);
  }
};

module.exports = {
  allposts,
  oneposts,
  createposts,
  updateposts,
  deletepost,
};
