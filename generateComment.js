const Video = require('./models/video');
const VideoComment = require('./models/videoComment');

const generateCommentToVideo = async () => {
	try {
		const videos = await Video.find();

		const comments = videos.map(async (video, idx) => {
			try {
				const comment = new VideoComment({
					user_name: '(' + idx + ')username_example',
					comment: '(' + idx + ')comment_example',
					id_video: video._id,
				});

				const commentToSave = await comment.save();
				return commentToSave;
			} catch (error) {
				console.error(error.message);
			}
		});
		console.log('Comments::' + comments.length);
	} catch (error) {
		console.error(error.message);
		return res.status(400).json({ message: 'Video not found' });
	}
};
module.exports = generateCommentToVideo;
