const express = require('express');

const app = express()

app.get('/', (request, response) => {
    console.log('Request Received');
    //response.send('welcome');
    //response.json({msg: 'Welcome'});
    response.end();

});
app.listen(3333,() => {
    console.log('The server is up and listening on port 3333');
});