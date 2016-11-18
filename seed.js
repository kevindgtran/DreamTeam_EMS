var db = require('./models');

var companiesList = [
  {
    name: 'Katies Gadgets & Gizmos',
    description: 'Specializing is the selling of gadgets and gizmos',
    userName: 'Gadgets01',
    password: 'gadget',
    email: 'katie@gadgets&gizmos.com'
    //employees
  },
  {
    name: 'Kevins mobile apps',
    description: 'mobile apps for entreprenuers',
    userName: 'kevinmobileapps',
    password: 'mobileapps',
    email: 'kevin_tran@kevinsmobileapps.com'
    //employees
  }
];


db.Company.remove({}, function(err, companies){
  console.log('removed all companies');

  var newCompany = db.Company.create(companiesList, function(err, companies){
    if (err) { return console.log('Error', err); }
    console.log("created: ", company);
  })
  process.exit();
});
