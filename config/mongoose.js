const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/infohere_development');

const db = mongoose.connection;

db.on('error', console.log.bind(console, 'Error connecting to DB'));

db.once('open', ()=>{
    console.log('******Successfully connected to :: DB');
})

module.exports = db;