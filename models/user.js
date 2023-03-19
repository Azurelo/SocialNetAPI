const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    username: { 
        type: String,
        required: true,
        unique: true,
        trimmed: true, 
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: [validator.isEmail, 'Invalid Email Address'],
    },
    //check these two
    //Create a virtual called friendCount that retrieves
    //the length of the user's friends array field on query.
    thoughts: [thoughtSchema],
    friends: [userSchema],
});

const thoughtSchema = new mongoose.Schema({
    thoughtText: {
        type: String,
        required: true,
        max: 280,
    },
    //adjust this
    createdAt: {
        date: date,
        default: date.current
    }

})