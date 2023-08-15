const mongoose = require('mongoose');
const videoSchema = new mongoose.Schema({
	url: {
		required: 'url is required',
		type: String,
	},
	title: {
		required: 'title is required',
		type: String
	},
	description: {
		type: String
	},
	video_count: {
		type: Number
	}
});

module.exports = mongoose.model('videos', videoSchema);
