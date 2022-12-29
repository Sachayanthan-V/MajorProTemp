const express = require('express');
const port = 8000;

const app = express();


app.listen(port, function(err){
    if (err){
        console.log(`Error occured on listening to port : ${port}`);
    }

    console.log(`Server is up and running with the port : ${port}`);
    
    
})