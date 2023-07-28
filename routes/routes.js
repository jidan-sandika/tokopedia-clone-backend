const express = require('express');
const router = express.Router();
const {addCommentToVideo, getCommentByVideoId} = require('../controllers/videoComment');
const {
	getProductByVideoId,
	addProductToVideo,
} = require('../controllers/videoProduct');
const {
	addThumbnail,
	getThumbnails,
	updateThumbnailByVideoId,
	deleteThumbnailByVideoId,
} = require('../controllers/videoThumbnail');
const {
	getVideos,
	addVideo,
	getVideoById,
	updateVideoById,
	deleteVideoById,
} = require('../controllers/video');

// route for videos end point
router.get('/videos', getVideos);
router.post('/videos', addVideo);
router.get('/videos/:id', getVideoById);
router.patch('/videos/:id', updateVideoById);
router.delete('/videos/:id', deleteVideoById);

// route for thumbnail end point

router.get('/thumbnails/', getThumbnails);
router.post('/thumbnails/:videoId', addThumbnail);
router.patch('/thumbnails/:videoId', updateThumbnailByVideoId);
router.delete('/thumbnails/:videoId', deleteThumbnailByVideoId);

// route for product
router.get('/products/:videoId', getProductByVideoId);
router.post('/products/:videoId', addProductToVideo);

// route for comment
router.post('/comments/:videoId', addCommentToVideo);
router.get('/comments/:videoId', getCommentByVideoId);

module.exports = router;
