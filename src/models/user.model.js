const mongoose = require('mongoose');
const md5 = require('md5');

const userSchema = mongoose.Schema({
  email: String,
  password: String,
});

userSchema.methods.verifyPassword = function verifyPassword(password) {
  return md5(password) === this.password;
};

module.exports = mongoose.model('Users', userSchema);
