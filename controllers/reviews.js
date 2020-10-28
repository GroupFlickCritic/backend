const express = require('express');
const {Review} = require('../models/Review');
const Movie = require('../models/Movie');
const router = express.Router();

router.get('/', (req, res) => {
	Review.find({})
		.then((allReviews) => {
			res.json(allReviews);
		})
		.catch(console.error);
});

router.get('/:id', (req, res) => {
	Review.findById({ _id: req.params.id })
		.then((review) => {
			res.json(review);
		})
		.catch(console.error);
});
//create a new review
router.post('/:movieId', (req, res) => {
	let newReview = req.body;
	Review.create(newReview).then((review)=>{

		Movie.findById({ _id: req.params.movieId })
			.then((movie) => {
				movie.reviews.push(review);
				movie.save();
				res.json(movie);
			})
			.catch(console.error);
	})
	
});

//update review by movie id and review id
router.put('/:movieId/:id/:index', (req, res) => {
	let updatedReview = req.body;
	let index = req.params.index
	Review
		.findOneAndUpdate({ _id: req.params.id }, updatedReview, {
			new: true,
		})
		.then((updatedReview) => {
			Movie.findById({_id: req.params.movieId}).then((movie)=>{
				movie.reviews[index] = updatedReview
				movie.save()
				res.json(movie)
			}).catch(console.error);
		})
		.catch(console.error);
});



module.exports = router;
