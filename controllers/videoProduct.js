const VideoProduct = require('../models/videoProduct');
const Video = require('../models/video');

const getProductByVideoId = async (req, res) => {
	try {
		const videoId = req.params.videoId;
		const products = await VideoProduct.find({ id_video: videoId });
		if (!products || products === null || products.length <= 0) {
			return res.status(404).json({ message: 'Product not found' });
		}
		const results = products.map((item) => {
			return {
				id_product: item._id,
				link_product: item.link_product,
				title: item.title,
				price: item.price,
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

const addProductToVideo = async (req, res) => {
    try {
        const videoProduct = await Video.findById(req.params.videoId)
        if (!videoProduct || videoProduct === null || videoProduct.length <= 0) {
            return res.status(404).json({message: 'Video not found'});
        }
        
    } catch (error) {
        console.error(error.message)
        return res.status(400).json({message: 'Video not found'});
    }
    try {
        const product = new VideoProduct({
            link_product: req.body.link_product,
            title: req.body.title,
            price: req.body.price,
            id_video: req.params.videoId,
        });

		const productToSave = await product.save();
		return res.status(201).json(productToSave);
	} catch (error) {
		console.error(error.message);
		return res
			.status(500)
			.json({ message: 'Something went wrong.', error: error.message });
	}
};

module.exports = { getProductByVideoId, addProductToVideo };
