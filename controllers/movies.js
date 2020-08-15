const express = require('express');
const Movie = require('../models/Movie');
const router = express.Router();

// Get all the movies
router.get('/', (req, res)=>{
    Movie.find({}).then((movies)=>{
        res.json(movies);
    })
})

// Create a new movie
router.post('/', (req, res) => {});

// Update a movie by title
router.put('/:title', (req, res) => {});

// Get a movie by title
router.get('/', (req, res) => {});

// Delete a movie by title
router.delete('/', (req, res) => {});

module.exports = router;