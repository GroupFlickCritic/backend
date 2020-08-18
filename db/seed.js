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

			// New Movie
			return Movie.create({
				title: 'Jurassic Park',
				mainImage:
					'https://user-images.githubusercontent.com/65630204/90316439-315e4380-def0-11ea-882c-34c246dfc9ba.jpg',
				infoImage:
					'https://user-images.githubusercontent.com/65630204/90316806-bc403d80-def2-11ea-8ad9-906214c5cdb3.jpg',
				movieInfo: {
					summary:
						"A pragmatic paleontologist visiting an almost complete theme park is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose.",
					director: 'Steven Spielberg',
					writers:
						'Michael Crichton (novel), Michael Crichton (screenplay), David Koepp (screenplay)',
					genres: 'Action | Adventure | Sci-Fi | Thriller',
					rated: 'PG-13',
					releaseDate: '06-11-1993',
				},
			}).then((newMovie) => {
				// First Review
				return Review.create({
					movie: newMovie._id,
					review: 'That T-Rex was terrifically TERRIFYING!!',
					datePosted: '08-16-2020',
				}).then((review) => {
					newMovie.reviews.push(review);
					return newMovie.save();
				});

				// Second Review
				return Review.create({
					movie: newMovie._id,
					review: 'What an amazing score. Truly immersive.',
					datePosted: '08-16-2020',
				}).then((review) => {
					newMovie.reviews.push(review);
					return newMovie.save();
				});
			});

			// New Movie
			return Movie.create({
				title: 'Star Wars: Episode IV - A New Hope',
				mainImage:
					'https://user-images.githubusercontent.com/65630204/90316469-72eeee80-def0-11ea-830b-e7cfddbba8e4.jpg',
				infoImage:
					'https://user-images.githubusercontent.com/65630204/90316845-00334280-def3-11ea-93d3-bca801e01b18.jpg',
				movieInfo: {
					summary:
						"Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.",
					director: 'George Lucas',
					writers: 'George Lucas',
					genres: 'Action, Adventure, Fantasy, Sci-Fi',
					rated: 'PG',
					releaseDate: '05-25-1977',
				},
			}).then((newMovie) => {
				// First Review
				return Review.create({
					movie: newMovie._id,
					review: 'That Han is one cool cucumber!',
					datePosted: '04-16-1998',
				}).then((review) => {
					newMovie.reviews.push(review);
					return newMovie.save();
				});

				// Second Review
				return Review.create({
					movie: newMovie._id,
					review: 'Beep boop beep boooooop',
					datePosted: '02-14-1996',
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
