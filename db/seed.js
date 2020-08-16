const movies = require('./movies.json');

const Movie = require('../models/Movie');

Movie.deleteMany()
	.then(() => {
		return Movie.collection.insert(movies);
	})
	.then(() => {
		console.log('Seeded movies data.');
		process.exit();
	});
