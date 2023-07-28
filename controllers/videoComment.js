const VideoComment = require('../models/videoComment');
const Video = require('../models/video');

const getCommentByVideoId = async (req, res) => {
	try {
		const videoId = req.params.videoId;
		const comments = await VideoComment.find({ id_video: videoId });
		if (!comments || comments === null || comments.length <= 0) {
			return res.status(404).json({ message: 'Comment not found' });
		}
		const results = comments.map((item) => {
			return {
				username: item.username,
				comment: item.comment,
				createdAt: item.createdAt,
				updatedAt: item.updatedAt,
			};
		});
		return res.json(results);
	} catch (error) {
		console.error(error.message);
		return res
			.status(500)
			.json({ message: 'Something went wrong.', error: error.message });
	}
};

const addCommentToVideo = async (req, res) => {
	try {
		const videoComment = await Video.findById(req.params.videoId);
		if (!videoComment || videoComment === null || videoComment.length <= 0) {
			return res.status(404).json({ message: 'Video not found' });
		}
	} catch (error) {
		console.error(error.message);
		return res.status(400).json({ message: 'Video not found' });
	}
	try {
		const comment = new VideoComment({
			username: req.body.username,
			comment: req.body.comment,
			id_video: req.params.videoId,
		});

		const commentToSave = await comment.save();
		return res.status(201).json(commentToSave);
	} catch (error) {
		console.error(error.message);
		return res
			.status(500)
			.json({ message: 'Something went wrong.', error: error.message });
	}
};

module.exports = { getCommentByVideoId, addCommentToVideo };
