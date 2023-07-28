const mongoose = require('mongoose');
const videoThumbnailSchema = new mongoose.Schema({
	url_image: {
		required: true,
		type: String,
	},
    id_video: {
        required: true,
		type: String,
		unique: true
    }
});

module.exports = mongoose.model('videoThumbnails', videoThumbnailSchema);
