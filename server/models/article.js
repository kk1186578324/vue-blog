var mongoose = require('mongoose');
var articleSchema = new mongoose.Schema({
  "title":String,
  "tag":[],
  "content":String,
  "date":String
})
module.exports = mongoose.model('article',articleSchema);
