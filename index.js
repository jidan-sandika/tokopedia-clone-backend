require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const mongoUrl = process.env.DATABASE_URL;
const bodyParser = require('body-parser');
const generateVideos = require('./generateVideo');
const generateThumbnail = require('./generateThumbnail');
const generateProductToVideo = require('./generateProduct');
const generateCommentToVideo = require('./generateComment');

console.log(mongoUrl);

const params = {
	useNewUrlParser: true,
};

async function connectToDatabase() {
	try {
		await mongoose.connect(mongoUrl, params);

		console.log('Connected to database');
	} catch (error) {
		console.error(error);
	}
	const database = mongoose.connection;

	database.on('error', (err) => {
		console.error(err);
	});

	database.once('connected', () => {
		console.log('Database connected');
	});
}

const routes = require('./routes/routes');
const app = express();

connectToDatabase();

generateVideos(
	generateThumbnail,
	generateProductToVideo,
	generateCommentToVideo
);

const corsOptions = {
	origin: 'https://final-project-tokopedia-play-clone-frontend.vercel.app/',
};

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', routes);

app.get('/', (req, res) => {
	res.send('<h1>Welcome to tokopedia play clone.</h1>');
});

app.all('*', (req, res) => {
	res.status(404).send('<h1>Resource not found.</h1>');
});

const port = process.env.PORT;

app.listen(port, () => {
	console.log(`Server start at http://localhost:${port}`);
});
