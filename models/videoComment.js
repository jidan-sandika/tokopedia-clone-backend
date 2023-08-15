const mongoose = require('mongoose');

const videoCommentSchema = new mongoose.Schema(
	{
		user_name: {
			type: String,
			required: 'Username is required',
		},
		comment: {
			type: String,
			required: 'Comment is required',
		},
		id_video: {
			required: true,
			type: mongoose.Schema.Types.ObjectId,
			ref: 'videos',
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('videoComments', videoCommentSchema);
