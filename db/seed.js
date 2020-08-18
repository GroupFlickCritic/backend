const movies = require('./movies.json');

const Movie = require('../models/Movie');
const Review = require('../models/Review');
Movie.deleteMany().then(() => {
	// console.log('Deleted all movies');
	Review.deleteMany()
		.then(() => {
			// console.log('deleted all reviews');
			return Movie.create({
				title: 'Coming To America',
				mainImage:
					'https://user-images.githubusercontent.com/65630204/90316233-cbbd8780-deee-11ea-865a-6b68fe0b70cb.jpg',
				infoImage:
					'https://user-images.githubusercontent.com/65630204/90316747-4dfb7b00-def2-11ea-9e24-f4795b47f3de.jpg',
				movieInfo: {
					summary:
						'An extremely pampered African Prince travels to Queens, New York, and goes undercover to find a wife that he can respect for her intelligence and will.',
					director: 'John Landis',
					writers: 'Eddie Murphy (story), David Sheffield (screenplay) ',
					genres: 'Comedy | Romance',
					rated: 'R',
					releaseDate: '06-29-1988',
				},
			}).then((newMovie) => {
				// console.log('created coming to America');

				//crate one review for coming to america
				return Review.create({
					movie: newMovie._id,
					review:
						'This show movie is evergreen, I love it more every time i watch it',
					datePosted: '08-16-2020',
				}).then((review) => {
					// console.log(review);
					newMovie.reviews.push(review);

					// console.log(newMovie);
					return newMovie.save();
				});

				//a second review
				return Review.create({
					movie: newMovie._id,
					review: 'Eddie killed this, this movie is gold',
					datePosted: '08-16-2020',
				}).then((review) => {
					// console.log(review);
					newMovie.reviews.push(review);

					// console.log(newMovie);
					return newMovie.save();
				});
			});

			
		})
		.then(() => {
			console.log('Seeded movies data.');
			process.exit();
		});
});
