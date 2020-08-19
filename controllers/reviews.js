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

router.get('/:id', (req, res)=>{
	Review.findById({_id: req.params.id}).then((review)=>{
		res.json(review);
	}).catch(console.error)
})
//create a new review
router.post('/', (req, res) => {
	let newReview = req.body;
	Review.create(newReview)
		.then((theNewReview) => {
			//return the created review
					res.json(theNewReview);
		})
		.catch(console.error);
});

//update review by movie id and review id
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
