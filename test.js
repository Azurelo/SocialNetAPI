const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
// Define the user schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  thoughts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Thought'
  }],
  friends: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }]
});

// Create the user model
const User = mongoose.model('User', userSchema);

async function test() {
  // Connect to the database
  await mongoose.connect('mongodb://localhost/socialnetDB', { useNewUrlParser: true });

  // Create a new user
  const user = new User({
    username: 'food',
    email: 'food@example.com',
    thoughts: [],
    friends: []
  });

  // Save the user to the database
  await user.save();

  // Find the user in the database
  const foundUser = await User.findOne({ username: 'food' });

  // Log the user to the console
  console.log('Found a user:', foundUser);

  // Disconnect from the database
  await mongoose.disconnect();
}

// Call the test function
test();
