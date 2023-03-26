const { connect, connection} = require('mongoose');

//Mongoose wrapping around my local MongoDB
connect('mongodb://127.0.0.1:27017/socialnetworkDB', {
    useNewParser:true,
    useUnifiedTopology:true,
});

module.exports = connection;

