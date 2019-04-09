var express = require('express');
var router = express.Router();
var controller = require('../controllers/loginController');

// POST Login  
router.post('/', controller.login);

module.exports = router;