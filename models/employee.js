var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EmployeeSchema = new Schema({
  name: String,
  positionTitle: String,
  phoneNumber: String,
  email: String,
  emergencyContact: String,
  birthday: String,
  equity: String,
  fullTime: Boolean,
  startDate: String,
  salary: String,
  shirtSize: String,
  favoriteFoods: [String],
  allergies: [String],
  badgePhoto: String
});

var Employee = mongoose.model('Employee', EmployeeSchema);
module.exports = Employee;
