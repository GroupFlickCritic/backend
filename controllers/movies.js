const express = require('express');
const Movie = require('../models/Movie');
const {Review} = require('../models/Review');
const router = express.Router();

// Get all the movies
router.get('/', (req, res) => {
	Movie.find({})
		.then((allMovies) => {
			res.json(allMovies);
		})
		.catch(console.error);
});

// Get a movie by title
router.get('/:title', (req, res) => {
	Movie.find({ title: req.params.title })
		.then((movieByTitle) => {
			res.json(movieByTitle);
		})
		.catch(console.error);
});

// add a review by movie
// router.put('/:id/:reviewId', (req, res) => {
// 	const movieID = req.params.id;
// 	const reviewID = req.params.reviewId;
// 	// find a review by its id
// 	Review.findById({ _id: reviewID })
// 		.then((review) => {
// 			// find the movie by its id
// 			Movie.findOneAndUpdate({ _id: movieID })
// 				.then((movie) => {
// 					// push each id into the others array
// 					movie.reviews.push(review._id);
// 					// save both
// 					movie.save();
// 					// send json response
// 					//we are getting back the updated movie
// 					res.json(movie);
// 				})
// 				.catch(console.error);
// 		})
// 		.catch(console.error);
// });



// Delete a movie by title
router.delete('/:title', (req, res) => {
	Movie.findOneAndDelete({ title: req.params.title })
		.then((deletedMovie) => {
			//return all movies after a movie has been deleted
			Movie.find({})
				.then((allMovies) => {
					res.json(allMovies);
				})
				.catch(console.error);
		})
		.catch(console.error);
});

//delete a review by its index and its id
router.delete('/:id/:index/:reviewId', (req, res) => {
	let index = req.params.index;
	Movie.findById({ _id: req.params.id })
		.then((movie) => {
			movie.reviews.splice(index, 1)
			movie.save()
			return movie
		}).then((movie)=>{
			Review.findByIdAndDelete({_id: req.params.reviewId}).then(()=>{
				res.json(movie);
			})
		})
		.catch(console.error);
});

module.exports = router;
