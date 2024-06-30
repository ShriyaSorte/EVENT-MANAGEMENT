const userModel = require('../models/userModel');
const jwt = require('jsonwebtoken');

// register a new user
async function registeruser(req,res){
    try {
        const user = new userModel(req.body);
        await user.save();
        res.status(201).send({ message: 'User added successfully', user});
    } catch (error) {
        res.status(500).send(error);
    }
};

// login a user
async function loginuser(req,res){
    try {
        const {email,password} = req.body;
        const user = await userModel.findOne({email});
        if(!user || !(await user.comparepassword(password))){
            return res.status(400).send({message: 'User not found'});
        }
        const token = jwt.sign({_id:user._id}, 'shriya', {expiresIn: '1h'});
        res.status(200).send({user, token});
    } catch (error) {
        res.status(400).send(error);
    }
};

module.exports = {registeruser, loginuser};