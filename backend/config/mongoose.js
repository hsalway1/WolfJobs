const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

mongoose.connect('mongodb://localhost/wolfjobs_development');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to mongodb'));

db.once('open',function(){
    console.log('Connected to database :: MongoDB')
})


module.exports = db;