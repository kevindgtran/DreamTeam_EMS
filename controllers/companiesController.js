var db = require('../models');

function index(req, res) {
  db.Company.find({}, function(err, allCompanies) {
      res.json(allCompanies);
    });
  }

function show(req, res) {
  db.Company.findById(req.params.companyId, function(err, foundCompany) {
    if(err) { console.log(err); }
    console.log('companiesController.show responding with', foundCompany);
    res.json(foundCompany);
  });
}

module.exports = {
  index: index,
  show: show
};
