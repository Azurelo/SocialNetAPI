const router = require('express').Router();

const {
  getAllUsers,
  getUserById,
  deleteUser,
  createUser,
  updateUser,
  addFriend,
  removeFriend
} = require('../../controllers/userController.js');

//users endpoint
router.route('/')
  .get(getAllUsers)
  .post(createUser);

//users/:userId endpoint
router.route('/:userId')
  .put(updateUser)
  .get(getUserById)
  .delete(deleteUser);

//users/:userId/friends/:friendId endpoint
router.route('/:userId/friends/:friendId')
  .post(addFriend)
  .delete(removeFriend);

module.exports = router;
