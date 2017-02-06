var mongoose = require('mongoose'),
  bcryptjs = require('bcryptjs');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  email: String,
  passwordDigest: String
});

UserSchema.statics.createSecure = function (email, password, callback) {

var UserModel = this;

bcryptjs.genSalt(function (err, salt) {
  console.log('salt: ', salt);  // changes every time
  bcryptjs.hash(password, salt, function (err, hash) {

    UserModel.create({
      email: email,
      passwordDigest: hash
    }, callback);
  });
});
};

var User = mongoose.model('User', UserSchema);

module.exports = User;
