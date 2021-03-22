const { request, response } = require('express');
const express = require('express');
const morgan = require('morgan');
const bodyparser = require('body-parser');

const app = express()
app.use(morgan('dev'))
app.use(bodyparser.urlencoded({extended:false}))
// const users = [
//     {first_name : 'Parth', last_name:'Vyas',age:'24'},
//     {first_name : 'JOhn', last_name:'Doe',age:'24'}]
    
   const router_users = require('./Routes/user.js')
   app.use(router_users);

    app.get('/', (request, response) => {
        response.send('Welcome');
    });
    // app.get('/user', (request, response) => {
    //     response.json(users);
    // });
    // app.get('/user/:id', (request, response) => {
    //     console.log(request.params)
    //     const {id} = request.params;
    //     response.json(users[id]);
    // });
    // app.post('/user', (request,response) =>{
    //     console.log(request.body);
    //     const {first_name,last_name,age} = request.body
    //     users.push({first_name,last_name,age});
        
    //     response.end()
    // } )
    
    // app.delete('/user/:id', (request, response) => {
    //     console.log(request.params)
    //     const {id} = request.params;
    //     users.splice(id,1);
    //     response.json(users[id]);
    // });
    




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
    console.log('###Get method');
    console.log('query parameters')
    console.log(request.query);
    
    console.log("Body");
    console.log(request.body);

    console.log('####Route parameters')
    console.log(request.params);
    response.end()
})
app.post('/id/:user_id',(request,response) =>{
     console.log('###post method');
    console.log('query parameters')
    console.log(request.query);
    
    console.log("Body");
    console.log(request.body);

    console.log('####Route parameters')
    console.log(request.params);
    response.end()
})
app.put('/id/:user_id',(request,response) =>{
    console.log('###put method');
   console.log('query parameters')
   console.log(request.query);
   
   console.log("Body");
   console.log(request.body);

   console.log('####Route parameters')
   console.log(request.params);
   response.end()
})
app.patch('/id/:user_id',(request,response) =>{
    console.log('###patch method');
   console.log('query parameters')
   console.log(request.query);
   
   console.log("Body");
   console.log(request.body);

   console.log('####Route parameters')
   console.log(request.params);
   response.end()
})
app.delete('/id/:user_id',(request,response) =>{
    console.log('###delete method');
   console.log('query parameters')
   console.log(request.query);
   
   console.log("Body");
   console.log(request.body);

   console.log('####Route parameters')
   console.log(request.params);
   response.end()
})
app.options('/id/:user_id',(request,response) =>{
    console.log('###options method');
   console.log('query parameters')
   console.log(request.query);
   
   console.log("Body");
   console.log(request.body);

   console.log('####Route parameters')
   console.log(request.params);
   response.end()
})
app.head('/id/:user_id',(request,response) =>{
    console.log('###head method');
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
