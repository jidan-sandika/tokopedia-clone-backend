const Video = require('./models/video');

async function generateVideo(thumbnailHandle, productHandle, commentHandle) {
	for (let i = 0; i < 10; i++) {
		const video = new Video({
			url: 'https://youtube.com/embed/sP2ZwmET0CI?autoplay=1',
			title:
				'(' +
				i +
				')Belanja Produk Kecantikan Ori, Selalu Ada Selalu Bisa di Tokopedia',
			description:
				'(' +
				i +
				')Pengen beli produk Makeup tapi takut nggak ori? Tenang, belanja produk kecantikan pasti ori di Official Store Tokopedia. Lebih hemat karena Bebas Ongkir dengan belanja min. Rp20rb! Selalu ada buat si paling paripurna, selalu bisa kasih yang tepercaya, karena Tokopedia #SelaluAdaSelaluBisa Cek Tokopedia sekarang! #AdsTokopedia',
			video_count: i,
		});

		try {
			const videoToSave = await video.save();
		} catch (error) {
			console.error(error.message);
		}
	}

	await thumbnailHandle();
	await productHandle();
	await productHandle();
	await productHandle();
	await commentHandle();
	await commentHandle();
	await commentHandle();
}
module.exports = generateVideo;
