// npm dependencies
const express       = require('express');

// Routes import
const auth          = require('../routes/auth.routes');
const users         = require('../routes/users.routes');

// constant import
const { routes }    = require('../utilities/constants');
const router        = express.Router();

// Giving the route paths
router.use(routes.AUTH      , auth);
router.use(routes.USERS     , users);

// default export
module.exports = router; 