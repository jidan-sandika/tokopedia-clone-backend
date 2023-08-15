const mongoose = require('mongoose');
const videoThumbnailSchema = new mongoose.Schema({
	url: {
		required: 'url_image is required',
		type: String,
	},
	title: {
		required: 'title thumbnail is required',
		type: String,
	},
	id_video: {
		required: true,
		type: mongoose.Schema.Types.ObjectId,
		ref: 'videos',
	},
});

module.exports = mongoose.model('videoThumbnails', videoThumbnailSchema);
