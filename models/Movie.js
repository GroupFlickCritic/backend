const mongoose = require('../db/connection.js');

const MovieSchema = mongoose.Schema({
    title: {type: String, required: true},
    mainImage: String,
    infoImage: String,
    movieInfo: {summary: String, director: String, writers: String, genres: String, rated: String, releaseData: String},

});

const Movie = mongoose.model('Movie', MovieSchema);

module.exports = Movie;