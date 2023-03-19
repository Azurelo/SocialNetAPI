const mongoose = require('mongoose');

//Mongoose wrapping around my local MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/socialnetworkDB', {
    useNewParser:true,
    useUnifiedTopology:true,
});

mongoose.exports = mongoose.connection;

