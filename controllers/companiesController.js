var db = require('../models');



function index(req, res) {
  db.Company.find(function(err, company) {
    if (err) {
      return console.log("error: " + err);
    }
    res.json(company);
  });
};



module.exports.index = index;
