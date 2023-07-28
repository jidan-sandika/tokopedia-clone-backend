const Video = require('../models/video');
const VideoThumbnail = require('../models/videoThumbnail');

const getVideos = async (req, res) => {
	try {
		const videos = await Video.find();
		if (!videos || videos === null || videos.length <= 0) {
			return res.status(404).json({ message: 'Videos not found' });
		}

		return res.json(videos);
	} catch (error) {
		console.error(error.message);
		return res
			.status(500)
			.json({ message: 'Something went wrong.', error: error.message });
	}
};

const addVideo = async (req, res) => {
	if (
		!req.body.url ||
		req.body.url.length <= 0 ||
		req.body.url === '' ||
		req.body.url === ' '
	) {
		return res.status(400).json({ message: 'Please provide URL.' });
	}

	const video = new Video({
		url: req.body.url,
	});

	try {
		const videoToSave = await video.save();
		return res.status(201).json(videoToSave);
	} catch (error) {
		console.error(error.message);
		return res
			.status(500)
			.json({ message: 'Something went wrong.', error: error.message });
	}
};

const getVideoById = async (req, res) => {
	try {
		const video = await Video.findById(req.params.id);
		if (!video || video === null) {
			return res.status(404).json({ message: 'Video not found' });
		}
		return res.json(video);
	} catch (error) {
		console.error(error.message);
		return res
			.status(500)
			.json({ message: 'Something went wrong.', error: error.message });
	}
};

const updateVideoById = async (req, res) => {
	const id = req.params.id;
	const updatedVideoData = req.body;
	const option = { new: true };

	if (!updatedVideoData || updatedVideoData.url.length <= 0) {
		return res.status(400).json({ message: 'Please provide URL.' });
	}

	try {
		const update = await Video.findByIdAndUpdate(
			id,
			updatedVideoData,
			option
		);
		if (!update || update === null) {
			return res.status(404).json({ message: 'Video not found' });
		}
		return res.json(update);
	} catch (error) {
		console.error(error.message);
		return res
			.status(500)
			.json({ message: 'Something went wrong.', error: error.message });
	}
};

const deleteVideoById = async (req, res) => {
	try {
		const video = await Video.findByIdAndDelete(req.params.id);
		if (!video || video === null || video.length <= 0) {
			return res.status(404).json({ message: 'Video not found' });
		}
		const thumbnailInVideo = await VideoThumbnail.findOneAndDelete({
			id_video: req.params.id,
		})

		return res.json(
			`Video with ${video} and ${thumbnailInVideo} has been deleted`
		);
	} catch (error) {
		console.error(error.message);
		return res
			.status(500)
			.json({ message: 'Something went wrong.', error: error.message });
	}
};

module.exports = {
	getVideos,
	addVideo,
	getVideoById,
	updateVideoById,
	deleteVideoById,
};
