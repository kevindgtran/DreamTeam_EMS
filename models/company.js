var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

  var CompanySchema = new Schema({
    name: String,
    description: String,
    userName: String,
    password: String,
    email: String,
    // employees: [EmployeeSchema]
  });

  var Company = mongoose.model('Company', CompanySchema);
  module.exports = Company;
