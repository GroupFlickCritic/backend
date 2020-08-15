const express = require('express');
const Movie = require('../models/Movie');
const router = express.Router();

router.get('/', (req, res)=>{
    Movie.find({}).then((movies)=>{
        res.json(movies);
    })
})

module.exports = router;