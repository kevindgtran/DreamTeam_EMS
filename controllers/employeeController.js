var db = require('../models');




function index(req, res) {
  db.Company.findById(req.params.companyId, function(err, foundCompany) {
    if(err) { console.log(err); }
    console.log('companiesController.show responding with', foundCompany.employees);
    res.json(foundCompany.employees);
  });
}


function create(req, res) {
  var newEmployee = new db.Employee({
  name: req.body.name,
  positionTitle: req.body.positionTitle,
  phoneNumber: req.body.phoneNumber,
  email: req.body.email,
  emergencyContact: req.body.emergencyContact,
  birthday: req.body.birthday,
  equity: req.body.equity,
  fullTime: req.body.fullTime,
  startDate: req.body.startDate,
  salary: req.body.salary,
  shirtSize: req.body.shirtSize,
  favoriteFoods: req.body.favoriteFoods,
  allergies: req.body.allergies,
  badgePhoto: req.body.badgePhoto
  });
  newEmployee.save(function(err, employee) {
    if (err) {
      return console.log("ERROR");
    }
    console.log("saved ", employee.name);
    res.json(employee);
  });

newAlbum.save(function(err, album) {
  if (err) {
    return console.log("save error:" + err);
  }
  console.log("saved ", album.name, "by", album.artistName);
  res.json(album);
});
}


module.exports = {
  index: index,
  create: create
};
