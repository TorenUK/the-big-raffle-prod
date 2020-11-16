const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "please enter an email"],
    unique: true,
    lowercase: true,
    validate: [isEmail, "please enter a valid email"],
  },
  password: {
    type: String,
    required: [true, "please enter a password"],
    minlength: [8, "minimum password length is 8 characters"],
  },
});

// mongoose hooks
// fire a function before doc is saved to db
userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();

  //"this" refers to the local instance of the user being created
  this.password = await bcrypt.hash(this.password, salt);

  next();
});

const User = mongoose.model("user", userSchema);
module.exports = User;
