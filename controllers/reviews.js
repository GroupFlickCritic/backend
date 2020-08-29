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


//update review by movie id and review id
router.put('/:id', (req, res) => {
	let updatedReview = req.body;
	Review
		.findOneAndUpdate({ _id: req.params.id }, updatedReview, {
			new: true,
		})
		.then((updatedReview) => {
			Review
				.find({})
				.then((allReviews) => {
					res.json(allReviews);
				})
				.catch(console.error);
		})
		.catch(console.error);
});

//delete a review by its id and delete the review from it's movie reviews array

module.exports = router;
