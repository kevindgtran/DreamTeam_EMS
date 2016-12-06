// server.js boilerplate
//REQUIREMENTS
var express = require('express');
var app = express();
var employee = require('./controllers/employeeController');



// MIDDLEWARE
app.use(express.static('public'));



// ROUTES
// CRUD READ ROUTE
app.get('/api/employees', employee.index);



// SERVER
app.listen(3000, function(){
  console.log('listening to localhost:3000');
});
