var express = require('express');
var router = express.Router();

const contactController = require('../server/contactController');
const mediaController = require('../server/mediaController');
const messageController = require('../server/messageController');
const robotController = require('../server/robotController');

contactController(router);
mediaController(router);
messageController(router);
robotController(router);

module.exports = router;
