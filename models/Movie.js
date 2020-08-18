const mongoose = require('../db/connection');

// in Movie.js
const MovieSchema = mongoose.Schema({
	title: { type: String, required: true },
	mainImage: String,
	infoImage: String,
	movieInfo: {
		summary: String,
		director: String,
		writers: String,
		genres: String,
		rated: String,
		releaseData: String,
	},
	reviews: [{ ref: 'Review', type: mongoose.Schema.Types.ObjectId }],
});

const Movie = mongoose.model('Movie', MovieSchema);

module.exports = Movie;
