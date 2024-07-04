const eventModel = require('../models/eventModel');
const jwt = require('jsonwebtoken');

// get all events
async function getAllEvents(req,res){
    try {
        const event = await eventModel.find();
        res.send(event);
    } catch (error) {
        res.status(500).send(error);
    }
};


// get a event by id
async function getSingleEvent(req,res){
    try {
        createdby = req.query.createdby;
        const event = await eventModel.find({createdby});
        if(!event){
            return res.status(404).send({message: "Event not found"});
        }
        res.send(event);
    } catch (error) {
        res.status(500).send(error);
    }
};

// create new event
async function addEvent(req,res){
    try {
        const event = new eventModel(req.body);
        result = await event.save();
        return res.status(200).send({message: "Event created successfully", result});
    } catch (error) {
        return res.status(500).send(error);
    }
};

// update an event
async function updateEvent(req,res){
    try {
        const updatedEvent = await eventModel.findByIdAndUpdate(req.params.id, req.body, {new:true});
        if(!updatedEvent){
            return res.status(404).send({message: "Event not found"});
        }
        res.send({message: "Event deleted successfully", updatedEvent});
    } catch (error) {
        res.status(400).send(error);
    }
};

// delete an event
async function deleteEvent(req,res){
    try {
        const deletedEvent = await eventModel.findByIdAndDelete(req.params.id, req.body, {new:true});
        if(!deletedEvent){
            return res.status(404).send({message: "Event not found"});
        }
        res.send({message: "Event deleted successfully", deletedEvent});
    } catch (error) {
        res.status(400).send(error);
    }
};

async function invite(req,res){
    try {

        const inviteEvent = await eventModel.findByIdAndUpdate(req.params.id,{$push : {invites:req.body}});
        console.log(inviteEvent);
        if(!inviteEvent){
            return res.status(400).send({message: "Event not found"});
        }
        res.status(201).send({message: "User invited successfully"});
    } catch (error) {
        res.status(500).send(error);
    }
};

async function rsvp(req,res){
    try {
        const rsvpEvent = await eventModel.findByIdAndUpdate(req.params.id, {$push : {rsvp:req.body}});
        if(!rsvpEvent){
            return res.status(400).send({message: "Event not found"});
        }
        res.status(200).send({message: "RSVP successful"});
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {getAllEvents,getSingleEvent,addEvent,updateEvent,deleteEvent,invite,rsvp};