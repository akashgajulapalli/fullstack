// npm dependency
const express               = require('express');

// function imports
const {
    addUser,
    getUsers,
    getUserByName,
    deleteUser,
    updateUser,
    getProfile,
}                           = require('../controller/users.controller');
const router                = express.Router();

// Middleware imports
const { authentication }    = require('../middleware/middleware');


/**
 * Adding the functionality of route based on the route path.
 * Authentication and Authorization has to happen before going to functionality.
 */
router.route('/').get([authentication],getUsers);
router.route('/').put([authentication],updateUser);
router.route('/me').get([authentication],getProfile);
router.route('/').post(addUser);
router.route('/:name').get([authentication],getUserByName);
router.route('/:email').delete([authentication],deleteUser);

// Default export
module.exports = router;