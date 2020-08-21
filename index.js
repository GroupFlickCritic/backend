const express = require('express');

const moviesController = require('./controllers/movies');
const reviewsController = require('./controllers/reviews');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
	res.redirect('/api/movies');
});

app.use('/api/movies', moviesController);
app.use('/api/reviews', reviewsController);
app.set('port', process.env.PORT || 4040);
app.listen(app.set('port'), () => {
	console.log('App listening on port 4040 🥳🤩');
});
