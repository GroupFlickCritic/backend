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

			// New Movie
			return Movie.create({
				title: 'Die Hard',
				mainImage:
					'https://user-images.githubusercontent.com/65630204/90316476-7e421a00-def0-11ea-998c-4ebcd24e17a7.jpg',
				infoImage:
					'https://user-images.githubusercontent.com/65630204/90544220-d5e0bf80-e154-11ea-8221-3b65d99e8a6e.jpg',
				movieInfo: {
					Summary:
						'An NYPD officer tries to save his wife and several others taken hostage by German terrorists during a Christmas party at the Nakatomi Plaza in Los Angeles.',
					director: 'John McTiernan',
					writers:
						'Roderick Thorp (novel), Jeb Stewart (screenplay) , Steven E. De Souza (screenplay)',
					genres: 'Action | Thriller',
					rated: 'R',
					releaseDate: '07-20-1988',
				},
			}).then((newMovie) => {
				// First Review
				return Review.create({
					movie: newMovie._id,
					review:
						'This movie has so many great one-liners, it’s kind of ridiculous.',
					datePosted: '01-28-2012',
				}).then((review) => {
					newMovie.reviews.push(review);
					return newMovie.save();
				});

				// Second Review
				return Review.create({
					movie: newMovie._id,
					review:
						'One of the greatest action films of all time. It keeps you on the edge of your seat from beginning to end. You’ll laugh. You’ll cry. You’ll love this movie!',
					datePosted: '11-08-2015',
				}).then((review) => {
					newMovie.reviews.push(review);
					return newMovie.save();
				});
			});

			// New Movie
			return Movie.create({
				title: 'Indiana Jones and the Temple of Doom',
				mainImage:
					'https://user-images.githubusercontent.com/65630204/90316483-8601be80-def0-11ea-9f1b-a6c95cac9038.jpg',
				infoImage:
					'https://user-images.githubusercontent.com/65630204/90316639-65863400-def1-11ea-9080-35cd556d8254.gif',
				movieInfo: {
					summary:
						'In 1935, Indiana Jones arrives in India, still part of the British Empire, and is asked to find a mystical stone. He then stumbles upon a secret cult committing enslavement and human sacrifices in the catacombs of an ancient palace.',
					director: 'Steven Spielberg',
					writers:
						'George Lucas (story), Willard Huyck (screenplay), Gloria Katz (screenplay)',
					genres: 'Action | Adventure',
					rated: 'PG',
					releaseDate: '05-23-1984',
				},
			}).then((newMovie) => {
				// First Review
				return Review.create({
					movie: newMovie._id,
					review: 'A timeless tale of adventure, daring and intrigue.',
					datePosted: '06-25-2018',
				}).then((review) => {
					newMovie.reviews.push(review);
					return newMovie.save();
				});

				// Second Review
				return Review.create({
					movie: newMovie._id,
					review:
						'I’ve seen this movie countless times since I was a child and it’s always such a pleasure to watch again and again.',
					datePosted: '02–15-2010',
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
