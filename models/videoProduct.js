const mongoose = require('mongoose');

const videoProductSchema = new mongoose.Schema({
	link_product: {
		required: true,
		type: String,
	},
	title: {
		required: true,
		type: String,
	},
	price: {
		required: true,
		type: Number,
	},
	id_video: {
		type: String,
	},
});

module.exports = mongoose.model('videoProducts', videoProductSchema);
