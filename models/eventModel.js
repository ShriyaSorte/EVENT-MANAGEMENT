const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    userid: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    dateTime: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Event', eventSchema);