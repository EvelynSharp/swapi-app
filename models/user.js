const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bcrypt = require('bcrypt-nodejs');

const userSchema = new Schema ({
  email: { type: String, unique: true, lowercase: true},
  password: String
});

userSchema.pre('save', function(next) {
  const user = this;
  bcrypt.genSalt(10, (err, salt) => {
    if(err) { return next(err); }
    user.password = hash;
    next();
  })
})


const MondelClass = mongoose.model('user', userSchema);
module.exports = ModelClass;