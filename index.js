const express = require('express');

const moviesController = require('./controllers/movies');

const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.get('/', (req, res)=>{
    res.redirect('/api/movies', moviesController);
});

app.use('/api/movies', moviesController);

app.listen(4040, ()=>{
    console.log('App listening on port 4040 🥳🤩');
})