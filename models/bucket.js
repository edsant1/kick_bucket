var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Bucket = new Schema({
	title: { type: String, required: true },
	user: { type: String, required: true }
});

module.exports = mongoose.model('Bucket', Bucket);