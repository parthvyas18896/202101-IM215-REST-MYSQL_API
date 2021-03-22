const express = require('express');
const router = express.Router();
module.exports = router

const users = [
    {first_name : 'Parth', last_name:'Vyas',age:'24'},
    {first_name : 'JOhn', last_name:'Doe',age:'24'}]
    
    router.get('/', (request, response) => {
        response.send('Welcome');
    });
    router.get('/user', (request, response) => {
        response.json(users);
    });
    router.get('/user/:id', (request, response) => {
        console.log(request.params)
        const {id} = request.params;
        response.json(users[id]);
    });
    router.post('/user', (request,response) =>{
        console.log(request.body);
        const {first_name,last_name,age} = request.body
        users.push({first_name,last_name,age});
        
        response.end()
    } )
    
    router.delete('/user/:id', (request, response) => {
        console.log(request.params)
        const {id} = request.params;
        users.splice(id,1);
        response.json(users[id]);
    });
    

