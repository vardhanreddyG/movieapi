const express = require('express');
const Movie = require('../models/movie');
const uuid = require('uuid/v4');
const moment = require('moment')

const router = express.Router();

// basic route
router.get('/', (req,res) => {
  res.json('Welcome to Moviesapi')
})


// demo movies post route
router.post('/postmovies', (req, res) => {
  
  // new movie 
  const movie = {
    id:uuid(),
    moviename: req.body.moviename,
    moviepng: req.body.moviepng,
    directedby: req.body.directedby,
    cast: req.body.cast,
    overview: req.body.overview,
    runtime: req.body.runtime,
    genres: req.body.genres,
    releasedate:req.body.releasedate,
    screenplay: req.body.screenplay,
    language:req.body.language
  }

  // store the movie
  new Movie(movie).save().then(movie => {
    res.json(movie)
  }).catch(err => res.json(err))
  //console.log(movie)
})


// get all movies
router.get('/movies', (req, res) => {
  Movie.find().then(movies => {
     
    // filter the result
    const finalmovies = filterOutput(movies);
    res.json(finalmovies)
  

  }).catch(err => res.json(err))
})

// filter the output
function filterOutput(movies) {
 
  let moviesList = []
  movies.forEach(movie => {
    //console.log(movie)
    moviesList.push({
      id:movie.id,
      moviename: movie.moviename,
      moviepng: movie.moviepng,
      directedby: movie.directedby,
      cast: movie.cast.map(cast => {
        return {
          name: cast.name,
          casturl:cast.casturl
        }
      }),
      overview: movie.overview,
      runtime: movie.runtime,
      genres: movie.genres.map(genre => {
        return {
          name:genre.name
        }
      }),
      language: movie.language,
      releasedate: movie.releasedate,
      screenplay:movie.screenplay
    })
  })
  // console.log(moviesList)
  return moviesList
}

// export route
module.exports = router