// npm dependency
const express                          = require('express');

// function imports
const { doLogin, resetPassword }       = require('../controller/auth.controller');
const router                           = express.Router();

// Middleware imports
const { authentication }    = require('../middleware/middleware');

// Setting up the functionality for route
router.route('/login').post(doLogin);
router.route('/resetPassword').post([authentication],resetPassword);

// Default export
module.exports = router;