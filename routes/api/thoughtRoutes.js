const router = require('express').Router();

const {
  getThoughtById,
  getAllThoughts,
  updateThought,
  addThought,
  deleteThought,
  addReaction,
  removeReaction
  
} = require('../../controllers/thoughtController.js');

//api/thoughts endpoint
router.route('/')

  .get(getAllThoughts)
  .post(addThought);

//thoughts/:thoughtId endpoint
router.route('/:thoughtId')

  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

//thoughts/:thoughtId/reactions end
router.route('/:thoughtId/reactions')
  .post(addReaction)
  
router.route('/:thoughtId/reactions/:reactionId')
  .delete(removeReaction);

module.exports = router;
