const mongoose = require('mongoose');

mongoose.Promise = Promise;

const mongoURI =
	process.env.NODE_ENV === 'production'
		? process.env.DB_URL
		: 'mongodb://localhost/flick-critic';

mongoose
	.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
	.then((conn) => {
		console.log(`connected to mongodb on ${conn.connections[0].name} db`);
	})
	.catch((error) => {
		console.error(error);
	});


module.exports = mongoose;
