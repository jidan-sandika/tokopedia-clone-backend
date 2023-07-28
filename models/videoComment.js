const mongoose = require('mongoose');

const videoCommentSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
		},
		comment: {
			type: String,
			required: true,
		},
		id_video: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('videoComments', videoCommentSchema);
