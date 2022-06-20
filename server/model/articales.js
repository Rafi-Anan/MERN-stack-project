const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const airtcleSchema = new Schema({
title: { type: String, required: true},
article: { type: String, required: true},
authorname: { type: String, required: true},
articleImage:{ type: String}

});


const Articles = mongoose.model("Articles", airtcleSchema);
module.exports = Articles;
