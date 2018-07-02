const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let articleSchema = new Schema({
   title: {type: String, required: true},
   url: {type: String, required: true},
   date: {type: Date, required: true}
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
