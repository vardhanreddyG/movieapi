const express = require('express');
const config = require('./config');
const bodyParser = require('body-parser')
const cors = require('cors');
const logger = require('morgan');
const mongoose = require('mongoose');
const routes = require('./routes/movie')

const app = express();

// connecting to db
mongoose.connect(config.mongodbUrl).then(() => {
  console.log('Conntected to db')
}).catch(err =>console.error(err))



// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(logger('dev'))


app.use('/api',routes)


// start server
app.listen(config.port, () => {
  console.log(`Api running on http://localhost:${config.port}`)
})



