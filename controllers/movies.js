const express = require('express');
const Movie = require('../models/Movie');
const Review = require('../models/Review')
const router = express.Router();

// Get all the movies
router.get('/', (req, res) => {
	Movie.find({})
		.then((allMovies) => {
			res.json(allMovies);
		})
		.catch(console.error);
});

// Create a new movie
router.post('/', (req, res) => {
	let newMovie = req.body;
	Movie.create(newMovie)
		.then(() => {
			//return all the movies after a new movie has been created
			Movie.find({})
				.then((allMovies) => {
					res.json(allMovies);
				})
				.catch(console.error);
		})
		.catch(console.error);
});

// Update a movie by title
router.put('/:title', (req, res) => {
	let updatedMovie = req.body;
	Movie.findOneAndUpdate({ title: req.params.title }, updatedMovie, {
		new: true,
	})
		.then((updatedMovie) => {
			//return all the movies after a movie has been updated
			Movie.find({})
				.then((allMovies) => {
					res.json(allMovies);
				})
				.catch(console.error);
		})
		.catch(console.error);
});

// add a review by movie
router.put('/:id/:reviewId', (req, res) => {
	const movieID = req.params.id;
	const reviewID = req.params.reviewId;
	
	// find a review by its id
	Review.findById({_id: reviewID}).then((review) => {
		// find the movie by its id
		Movie.findOneAndUpdate({ _id: movieID }).then((movie) => {
			// push each id into the others array
			movie.reviews.push(review._id);
			// review.movie.push(review._id);

			// save both
			movie.save();
			// review.save();

			// send json response
			//we are getting back the updated movie
			res.json(movie);
		});
	});
});

// Get a movie by title
router.get('/:title', (req, res) => {
	Movie.find({ title: req.params.title })
		.then((movieByTitle) => {
			res.json(movieByTitle);
		})
		.catch(console.error);
});

// Delete a movie by title
router.delete('/:title', (req, res) => {
	Movie.findOneAndDelete({ title: req.params.title }).then((deletedMovie) => {
		//return all movies after a movie has been deleted
		Movie.find({})
			.then((allMovies) => {
				res.json(allMovies);
			})
			.catch(console.error);
	});
});

module.exports = router;
