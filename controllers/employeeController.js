var db = require('../models');




function index(req, res) {
  db.Company.findById(req.params.companyId, function(err, foundCompany) {
    if(err) { console.log(err); }
    console.log('companiesController.show responding with', foundCompany.employees);
    res.json(foundCompany.employees);
  });
}



module.exports = {
  index: index
};
