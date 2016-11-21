var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  Employee = require('./employee');

  var CompanySchema = new Schema({
    name: String,
    description: String,
    userName: String,
    password: String,
    email: String,
    employees: [Employee.schema]
  });

  var Company = mongoose.model('Company', CompanySchema);
  module.exports = Company;
