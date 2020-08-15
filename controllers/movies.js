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
		res.json(newMovie);
	});
});

// Update a movie by title
router.put('/:title', (req, res) => {
	let updatedMovie = req.body;
	Movie.findOneAndUpdate({ title: req.params.title }, updatedMovie, {
		new: true,
	}).then((updatedMovie) => res.json(updatedMovie));
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
		res.json(deletedMovie);
	});
});

module.exports = router;
