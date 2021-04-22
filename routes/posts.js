const express = require("express");
const router = express.Router();
const {allposts, oneposts,createposts,updateposts,deletepost}= require('../controllers/posts');


//ALL POSTS
router.get("/",allposts);

//ONE POSTS
router.get("/:id",oneposts);

//CREATE POSTS
router.post("/",createposts);

//UPDATE POSTS
router.patch("/:id",updateposts);

//DELETE POSTS
router.delete("/:id",deletepost);


module.exports = router;
