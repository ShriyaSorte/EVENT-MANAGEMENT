const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const api = require('./routes/api');
const app = express();
port = 5001;
app.use(bodyparser.json());
app.use(express.json());
app.use('/api',api);

// connect to mongodb
mongoose.connect('mongodb+srv://shriyasorte2000:root@cluster0.egofevs.mongodb.net/event-management');
mongoose.connection.once('open',()=>{
    console.log("MongoDB connected");
});

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});
