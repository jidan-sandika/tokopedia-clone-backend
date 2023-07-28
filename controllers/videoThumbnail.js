const Video = require('../models/video');
const VideoThumbnail = require('../models/videoThumbnail');

const addThumbnail = async (req, res) => {
	if (
		!req.body.url ||
		req.body.url === '' ||
		req.body.url === ' ' ||
		req.body.url.length <= 0
	) {
		return res
			.status(400)
			.json({ message: 'Please provide url image for thumbnail video' });
	}
	try {
		const video = await Video.findById(req.params.videoId);
		if (!video) {
			return res.status(400).json({ message: 'Video not found' });
		}
	} catch (error) {
		console.error(error.message);
		return res
			.status(500)
			.json({ message: 'Something went wrong.', error: error.message });
	}

	const thumbnail = new VideoThumbnail({
		url_image: req.body.url,
		id_video: req.params.videoId,
	});
	try {
		const thumbnailToSave = await thumbnail.save();
		return res.status(201).json(thumbnailToSave);
	} catch (error) {
		console.error(error.message);
		return res
			.status(500)
			.json({ message: 'Something went wrong.', error: error.message });
	}
};

const getThumbnails = async (req, res) => {
	try {
		const thumbnails = await VideoThumbnail.find();
		if (!thumbnails || thumbnails === null || thumbnails.length <= 0) {
			return res.status(404).json({ message: 'Thumbnails not found' });
		}
		return res.json(thumbnails);
	} catch (error) {
		console.error(error.message);
		return res
			.status(500)
			.json({ message: 'Something went wrong.', error: error.message });
	}
};

const deleteThumbnailByVideoId = async (req, res) => {
	try {
		const thumbnailToDelete = await VideoThumbnail.findOneAndDelete({
			id_video: req.params.videoId,
		});

		if (!thumbnailToDelete || thumbnailToDelete === null) {
			return res.status(404).json({ message: 'Thumbnail not found' });
		}
		res.json(`Thumbnail with ${thumbnailToDelete} has been deleted`);
	} catch (error) {
		console.error(error.message);
		return res
			.status(500)
			.json({ message: 'Something went wrong.', error: error.message });
	}
};

const updateThumbnailByVideoId = async (req, res) => {
	const id = req.params.videoId;
	const updatedThumbnailData = req.body;
	const option = { new: true };

	if (!updatedThumbnailData || updatedThumbnailData.url.length <= 0) {
		return res.status(400).json({ message: 'Please provide URL.' });
	}

	try {
		const updateThumbnail = await VideoThumbnail.findOneAndUpdate(
			{
				id_video: id,
			},
			{
				url_image: updatedThumbnailData.url,
				id_video: id,
			},
			option
		);

		if (!updateThumbnail || updateThumbnail === null) {
			return res.status(404).json({ message: 'Video not found' });
		}
		return res.json(updateThumbnail);
	} catch (error) {
		console.error(error.message);
		return res
			.status(500)
			.json({ message: 'Something went wrong.', error: error.message });
	}
};

module.exports = {
	addThumbnail,
	getThumbnails,
	deleteThumbnailByVideoId,
	updateThumbnailByVideoId,
};
