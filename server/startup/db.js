// npm dependency
const mongoose      = require('mongoose');

const { db }        = require('../utilities/constants');
const messages      = require('../utilities/static_messages');

/**
 * @description     This method connects the application to database.
 */
module.exports = () => {
    mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log(messages.DBCONNECTION_SUCCESS_TEXT))
        .catch(err => console.log(messages.DBCONNECTION_FAILURE_TEXT, err));
}
