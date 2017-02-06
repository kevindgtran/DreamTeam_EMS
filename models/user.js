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

UserSchema.statics.authenticate = function (email, password, callback) {
 this.findOne({email: email}, function (err, foundUser) {
   console.log(foundUser);

   if (!foundUser) {
     console.log('No user with email ' + email);
     callback("Error: no user found", null);  // better error structures are available, but a string is good enough for now
   } else if (foundUser.checkPassword(password)) {
     callback(null, foundUser);
   } else {
     callback("Error: incorrect password", null);
   }
 });
};

UserSchema.methods.checkPassword = function (password) {
  return bcryptjs.compareSync(password, this.passwordDigest);
};

var User = mongoose.model('User', UserSchema);

module.exports = User;
