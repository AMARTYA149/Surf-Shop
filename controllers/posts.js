const Post = require("../models/post");

module.exports = {
  //Posts Index
  async postIndex(req, res, next) {
    let posts = await Post.find({});
    res.render("posts/index", { posts: posts });
  },
  //Posts New
  postNew(req, res, next) {
    res.render("posts/new");
  },
  //Posts create
  async postCreate(req, res, next) {
    //use req.body to create a new post
    let post = await Post.create(req.body);
    res.redirect(`/posts/${post.id}`);
  },
  //Posts show
  async postShow(req, res, next) {
    let post = await Post.findById(req.params.id);
    res.render("posts/show", { post });
  },
  //Posts Edit
  async postEdit(req, res, next) {
    let post = await Post.findById(req.params.id);
    res.render("posts/edit", { post });
  },
};
