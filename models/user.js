// User
// - email - string
// - password - string
// - username -  string
// - profilePic - string
// - post - array of object ref Post
// - reviews - array of object ref Review

const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: String,
  // password & username field is inbuilt provided by passport mongoose
  image: String,
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);
