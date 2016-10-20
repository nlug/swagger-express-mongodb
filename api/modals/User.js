var AutoIncrement, Schema, mongoose, User;

mongoose = require('mongoose');

AutoIncrement = require('mongoose-sequence');

Schema = mongoose.Schema;

User = new mongoose.Schema({
  UID: Number,
  name: String,
  gender: Boolean,
  age: Number,
  date: {
    type: Date,
    "default": Date.now
  }
});

User.plugin(AutoIncrement, {
  inc_field: 'UID'
});

module.exports = mongoose.model('Users', User);
