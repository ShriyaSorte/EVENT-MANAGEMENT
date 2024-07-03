const userController = require('../controller/userController');
const eventController = require('../controller/eventController');
const express = require('express');
const router = express.Router();

// user routes
router.post('/registeruser', userController.registeruser);
router.post('/loginuser', userController.loginuser);

// event routes
router.get('/getAllEvents', eventController.getAllEvents);
router.get('/getSingleEvent', eventController.getSingleEvent);
router.post('/addEvent', eventController.addEvent);
router.put('/updateEvent/:id', eventController.updateEvent);
router.delete('/deleteEvent/id', eventController.deleteEvent);

module.exports = router;