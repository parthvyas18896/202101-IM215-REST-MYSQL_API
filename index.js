const { request, response } = require('express');
const express = require('express');
const morgan = require('morgan');
const bodyparser = require('body-parser');

const app = express()
app.use(morgan('dev'))
app.use(bodyparser.urlencoded({extended:false}))

app.get('/', (request, response) => {
    console.log('Request Received');
    //response.send('welcome');
    //response.json({msg: 'Welcome'});

    // console.log('query parameters')
    // console.log(request.query);

    console.log("Body");
    console.log(request.body);
    
    response.end();

});
// app.get('/:first_name/:last_name',(request,response) =>{
//     console.log('Route parameters')
//     console.log(request.params);
// //     response.end()
// })
app.get('/id/:user_id',(request,response) =>{
     
    console.log('query parameters')
    console.log(request.query);
    
    console.log("Body");
    console.log(request.body);

    console.log('####Route parameters')
    console.log(request.params);
    response.end()
})
app.listen(3333,() => {
    console.log('The server is up and listening on port 3333');
});
