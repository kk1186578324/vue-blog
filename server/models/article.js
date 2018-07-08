var mongoose = require('mongoose');
var articleSchema = new mongoose.Schema({
  "title":String,
  // "tag":String,
  "content":String
})
module.exports = mongoose.model('article',articleSchema);
