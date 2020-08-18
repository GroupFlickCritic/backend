const express = require('express');
const Movie = require('../models/Movie');
const router = express.Router();

// Get all the movies
router.get('/', (req, res) => {
	Movie.find({}).then((allMovies) => {
		res.json(allMovies);
	});
});

// Create a new movie
router.post('/', (req, res) => {
	let newMovie = req.body;
	Movie.create(newMovie).then(() => {
		//return all the movies after a new movie has been created
		Movie.find({}).then((allMovies) => {
			res.json(allMovies);
		});
	});
});

// Update a movie by title
router.put('/:title', (req, res) => {
	let updatedMovie = req.body;
	Movie.findOneAndUpdate({ title: req.params.title }, updatedMovie, {
		new: true,
	}).then((updatedMovie) => {
		//return all the movies after a movie has been updated
		Movie.find({}).then((allMovies) => {
			res.json(allMovies);
		});
	});
});

// Get a movie by title
router.get('/:title', (req, res) => {
	Movie.find({ title: req.params.title }).then((movieByTitle) => {
		res.json(movieByTitle);
	});
});

// Delete a movie by title
router.delete('/:title', (req, res) => {
	Movie.findOneAndDelete({ title: req.params.title }).then((deletedMovie) => {
		//return all movies after a movie has been deleted
		Movie.find({}).then((allMovies) => {
			res.json(allMovies);
		});
	});
});
router.delete('/:title/:id', (req, res) => {
	Movie.find({ title: req.params.title }).then((movie) => {
		// Movie.find({}).then((deleteId) => {
		// res.json(deleteId);
		// });
		movie.reviews.forEach((element) => {
			if (element['_id'] === req.params.id) {
				movie.reviews.pop(element);
			}
		});
		Movie.findOneAndUpdate({ title: req.params.title }, movie, {
			new: true,
		}).then(() => {
			Movie.find({}).then((allMovies) => {
				res.json(allMovies);
			});
		});
	});
});

module.exports = router;
