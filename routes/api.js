const userController = require('../controller/userController');
const eventController = require('../controller/eventController');
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

// user routes
router.post('/registeruser', userController.registeruser);
router.post('/loginuser', userController.loginuser);

// event routes
router.get('/getAllEvents',auth, eventController.getAllEvents);
router.get('/getSingleEvent',auth, eventController.getSingleEvent);
router.post('/addEvent', eventController.addEvent);
router.put('/updateEvent/:id',auth, eventController.updateEvent);
router.delete('/deleteEvent/id',auth, eventController.deleteEvent);

router.post('/inviteEvent/:id/invite', eventController.invite);
router.post('/rsvpEvent/:id/rsvp', eventController.rsvp);

module.exports = router;