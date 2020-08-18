const express = require('express');
const Review = require('../models/Review');
const router = express.Router();

router.get('/', (req, res) => {
	Review.find({})
		.then((allReviews) => {
			res.json(allReviews);
		})
		.catch(console.error);
});

router.post('/', (req, res) => {
	let newReview = req.body;
	Review.create(newReview)
		.then(() => {
			Review.find({})
				.then((allReviews) => {
					res.json(allReviews);
				})
				.catch(console.error);
		})
		.catch(console.error);
});

router.put('/:id', (req, res) => {
	let updatedReview = req.body;
	Review.findOneAndUpdate({ _id: req.params.id }, updatedReview, {
		new: true,
	})
		.then((updatedReview) => {
			Review.find({})
				.then((allReviews) => {
					res.json(allReviews);
				})
				.catch(console.error);
		})
		.catch(console.error);
});

router.delete('/:id', (req, res) => {
	Review.findOneAndDelete({ _id: req.params.id }).then((deletedReview) => {
		Review.find({})
			.then((allReviews) => {
				res.json(allReviews);
			})
			.catch(console.error);
	});
});

module.exports = router;
