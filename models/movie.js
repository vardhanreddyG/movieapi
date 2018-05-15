const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  id: {
    type: String,
    required:true
  },
  moviename: {
    type: String,
    required: true,
  },
  moviepng: {
    type: String,
    required: true
  },
  directedby: {
    type: String,
    required: true
  },
  cast: [
    {
      name: {
        type: String,
        required: true
      },
      casturl: {
        type: String,
        required: true
      }
    }
  ],
  overview: {
    type: String,
    required:true
  },
  runtime: {
    type: String,
    required:true
  },
  genres: [{ name: String }],
  language: {
    type: String,
    required:true
  },
  releasedate: {
    type: Date,
    required:true
  },
  screenplay: {
    type: String,
    required:true
  }
});

module.exports = mongoose.model('movies',movieSchema)