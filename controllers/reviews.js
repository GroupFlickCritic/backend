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

module.exports = router;
