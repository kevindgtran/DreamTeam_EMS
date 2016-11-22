var mongoose = require('mongoose');
<<<<<<< HEAD
// mongoose.connect('mongodb://localhost/project-1');
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/Project-1");

=======
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/project-1');
>>>>>>> 9a5aff65b9acbab33d85a931f5c9a0a4c4cdd380

module.exports.Company = require('./company.js');
module.exports.Employee = require('./employee.js');
