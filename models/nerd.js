// /models/nerd.js

// grab the mongoose module
var mongoose = require('mongoose');

// define our model

module.exports = mongoose.model('Photo', {
  title: {type : String, default: ''},
  date: {type : String, default: ''},
  imgurl: {type : String, default: ''},
});

