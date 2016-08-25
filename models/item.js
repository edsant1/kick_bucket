var mongoose = required('mongoose');
var Schema = mongoose.Schema;

var Item = new Schema({
	name: { type: String, required: true },
	description: { type: String }
});

module.exports = mongoose.model('Item', Item);