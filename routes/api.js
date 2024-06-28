const userController = require('../controller/userController');
const express = require('express');
const router = express.Router();

// user routes
router.post('/registeruser', userController.registeruser);
router.post('/loginuser', userController.loginuser);

module.exports = router;