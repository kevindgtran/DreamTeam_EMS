var db = require('../models');




function index(req, res) {
  db.Company.findById(req.params.companyId, function(err, foundCompany) {
    if(err) { console.log(err); }
    console.log('companiesController.show responding with', foundCompany.employees);
    res.json(foundCompany.employees);
  });
}


function create(req, res) {
  var newEmployee = new db.Employee(req.body);

  newEmployee.save(function(err, employee) {
    if (err) {
      return console.log("ERROR");
    }
    console.log("saved ", employee.name);
    res.json(employee);
  });

}


module.exports = {
  index: index,
  create: create
};
