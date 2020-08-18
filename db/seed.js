const movies = require('./movies.json');

const Movie = require('../models/Movie');
const Review = require('../models/Review');
Movie.deleteMany().then(() => {
	Review.deleteMany()
		.then(() => {
			// New Movie
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
				// First Review
				return Review.create({
					movie: newMovie._id,
					review:
						'This show movie is evergreen, I love it more every time i watch it',
					datePosted: '08-16-2020',
				}).then((review) => {
					newMovie.reviews.push(review);
					return newMovie.save();
				});

				// Second Review
				return Review.create({
					movie: newMovie._id,
					review: 'Eddie killed this, this movie is gold',
					datePosted: '08-16-2020',
				}).then((review) => {
					newMovie.reviews.push(review);
					return newMovie.save();
				});
			});

			// New Movie
			return Movie.create({
				title: 'The Old Guard',
				mainImage:
					'https://user-images.githubusercontent.com/65630204/90316242-ee4fa080-deee-11ea-9c26-206b3e271cc8.jpg',
				infoImage:
					'https://user-images.githubusercontent.com/65630204/90316790-9ca91500-def2-11ea-810d-8746ed722696.jpg',
				movieInfo: {
					summary:
						'A covert team of immortal mercenaries are suddenly exposed and must now fight to keep their identity a secret just as an unexpected new member is discovered.',
					director: 'Gina Prince-Bythewood',
					writers:
						'Greg Rucka (screenplay), Greg Rucka, Leandro Fernandez (illustration)',
					genres: 'Action | Adventure | Fantasy',
					rated: 'R',
					releaseDate: '07-10-2020',
				},
			}).then((newMovie) => {
				// First Review
				return Review.create({
					movie: newMovie._id,
					review: 'Awesome show, nothing negative to say about it!',
					datePosted: '08-16-2020',
				}).then((review) => {
					newMovie.reviews.push(review);
					return newMovie.save();
				});

				// Second Review
				return Review.create({
					movie: newMovie._id,
					review:
						'I wish this was a series, couldn’t get enough of the characters',
					datePosted: '08-16-2020',
				}).then((review) => {
					newMovie.reviews.push(review);
					return newMovie.save();
				});
			});
		})
		.then(() => {
			console.log('Seeded movies data.');
			process.exit();
		});
});
