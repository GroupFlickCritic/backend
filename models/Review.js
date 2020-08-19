const mongoose = require('../db/connection');

const ReviewSchema = mongoose.Schema({
	review: String,
	datePosted: Date,
	movie: {
		ref: 'Movie',
		type: mongoose.Schema.Types.ObjectId
	}
});
const Review = mongoose.model('Review', ReviewSchema);
module.exports = Review;