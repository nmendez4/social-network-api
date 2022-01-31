const router = require('express').Router();

const {
    getAllThought,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction
} = require('../../controllers/thought-controller');

//sets get and post routes for /api/thoughts
router
    .route('/')
    .get(getAllThought)
    .post(createThought);

//sets get one, put and delete routes for /api/thoughts:id
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

//sets post route for /api/thoughts/:thoughtsId/reactions
router
    .route('/:thoughtId/reactions')
    .post(createReaction)

router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction);

module.exports = router;