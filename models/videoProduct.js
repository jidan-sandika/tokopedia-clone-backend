const mongoose = require('mongoose');

const videoProductSchema = new mongoose.Schema({
	link_product: {
		required: 'Link product is required',
		type: String,
	},
	title: {
		required: 'Title product is required',
		type: String,
	},
	price: {
		required: 'Price product is required',
		type: Number,
	},
	id_video: {
		required: true,
		type: mongoose.Schema.Types.ObjectId,
		ref: 'videos',
	},
});

module.exports = mongoose.model('videoProducts', videoProductSchema);
