const Video = require('./models/video');
const VideoProduct = require('./models/videoProduct');

const generateProductToVideo = async () => {
	try {
		const videos = await Video.find();

		const videoProducts = videos.map(async (video, idx) => {
			try {
				const product = new VideoProduct({
					link_product:
						'https://www.tokopedia.com/slimnfits/samsung-a54-5g-8-128-8-256-garansi-resmi-sein-white-8-128-14248',
					title:
						'(' +
						idx +
						')Samsung A54 5G [8/128] [8/256] Garansi Resmi SEIN - White, 8/128',
					price: 5191750,
					id_video: video._id,
				});

				const productToSave = await product.save();
				return productToSave;
			} catch (error) {
				console.error(error.message);
			}
		});
		console.log('video product::' + videoProducts.length);
	} catch (error) {
		console.error(error.message);
		return res.status(400).json({ message: 'Video not found' });
	}
};
module.exports = generateProductToVideo;
