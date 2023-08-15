const Video = require('./models/video');
const videoThumbnails = require('./models/videoThumbnail');

const generateThumbnail = async () => {
	try {
		const videos = await Video.find();

		const thumbnails = videos.map(async (video, idx) => {
			const thumbnail = new videoThumbnails({
				url: 'https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
				title: '(' + idx + ')Zona Promo',
				id_video: video._id,
			});
			try {
				const thumbnailToSave = await thumbnail.save();
				return thumbnailToSave;
			} catch (error) {
				console.error(error.message);
			}
		});
		console.log('Thumbnails::' + thumbnails.length);
	} catch (error) {
		console.error(error.message);
	}
};
module.exports = generateThumbnail;
