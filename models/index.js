var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/project-1');
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/Project-1");


module.exports.Company = require('./company.js');
module.exports.Employee = require('./employee.js');
