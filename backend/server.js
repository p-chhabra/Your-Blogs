//MAIN SERVER FILE
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const blogRoutes = require('./Routes/blogsRoute');
const HttpError = require('./modals/HttpError');


//MiddleWares
const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Access, Authorization');
    res.setHeader('Access-Control-Allow-Methods','GET, POST, PATCH, DELETE');
    next();
})

app.use('/api', blogRoutes);

app.use((req, res, next)=>{
    const error = new HttpError("Could not find this route",404);
    throw error;
})


//MongoDB Database Collection using mongoose
const url = "mongodb://van_astrea:abcdefgh@cluster0-shard-00-00.x7qxv.mongodb.net:27017,cluster0-shard-00-01.x7qxv.mongodb.net:27017,cluster0-shard-00-02.x7qxv.mongodb.net:27017/EqaimBlogs?ssl=true&replicaSet=atlas-4xumi5-shard-0&authSource=admin&retryWrites=true&w=majority";

mongoose.connect(url).then(()=>{
    app.listen(8000);
}).catch(err => {
    console.log(err);
})