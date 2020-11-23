const Post = require("../models/post");
const cloudinary = require("cloudinary");
cloudinary.config({
  cloud_name: "dgkwmuyou",
  api_key: "183824455937887",
  api_secret: process.env.CLOUDINARY_SECRET,
});

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
    req.body.post.images = [];
    for (const file of req.files) {
      let image = await cloudinary.v2.uploader.upload(file.path);
      req.body.post.images.push({
        url: image.secure_url,
        public_url: image.public_url,
      });
    }
    //use req.body to create a new post
    let post = await Post.create(req.body.post);
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
  //Posts Update
  async postUpdate(req, res, next) {
    let post = await Post.findByIdAndUpdate(req.params.id, req.body.post);
    // eval(require("locus"));
    res.redirect(`/posts/${post.id}`);
  },
  //Posts destroy
  async postDestroy(req, res, next) {
    await Post.findByIdAndRemove(req.params.id);
    res.redirect("/posts");
  },
};
