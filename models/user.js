var mongoose = require('mongoose'),
    bcrypt = require('bcryptjs');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: String,
  email: String,
  passwordDigest: String
  // employee: [Employee Schema]
});

// var newUser = req.body;
// create a new user with secure (hashed) password
UserSchema.statics.createSecure = function (name, email, password, callback) {
// `this` references our user model, since this function will be called from the model itself
// store it in variable `UserModel` because `this` changes context in nested callbacks
var UserModel = this;

UserSchema.methods.checkPassword = function (password) {
  return bcrypt.compareSync(password, this.passwordDigest);
};

// authenticate user (when user logs in)
UserSchema.statics.authenticate = function (name, email, password, callback) {
 // find user by email entered at log in
 // remember `this` refers to the User for methods defined on userSchema.statics
 this.findOne({email: email}, function (err, foundUser) {
   console.log(foundUser);

   // throw error if can't find user
   if (!foundUser) {
     console.log('No user with email ' + email);
     callback("Error: no user found", null);  // better error structures are available, but a string is good enough for now
   // if we found a user, check if password is correct
   } else if (foundUser.checkPassword(password)) {
     callback(null, foundUser);
   } else {
     callback("Error: incorrect password", null);
   }
 });
};

// hash password user enters at sign up
bcrypt.genSalt(function (err, salt) {
  console.log('salt: ', salt);  // changes every time
  bcrypt.hash(password, salt, function (err, hash) {

    // create the new user (save to db) with hashed password
    UserModel.create({
      name: name,
      // employee: employee,
      email: email,
      passwordDigest: hash
    }, callback);
  });
});
};

var User = mongoose.model('User', UserSchema);
module.exports = User;
