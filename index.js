//import the express module
const express = require('express');
const authRouter = require('./routes/auth.js')

const mongoose = require('mongoose');

//Define the port number the srver will listen on
const PORT  = 3000;
//create an instance of an express application

const app = express();


//mongodb string 
const DB = 'mongodb+srv://riffathemedia_db_user:7013040@cluster0.x1rfcho.mongodb.net/?appName=Cluster0';
//middleware -to rgister routes or to  mount routes
app.use(express.json());
app.use(authRouter);

mongoose.connect(DB).then(()=> {
    console.log('mongodb Connected')
});

//start the svrver and listen on the specified port
app.listen(PORT,"0.0.0.0", function (){
    //LOG THE  NUMBER 
    console.log(`server is running on port ${PORT}`)
});