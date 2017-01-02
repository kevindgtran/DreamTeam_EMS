var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function (req, res) {
  res.sendFile('views/index.html' , {root: __dirname});
});

var companies = [
 { name: 'Kevin\'s Widgets'},
 { name: 'Katie\'s gadgets & gizmos'}
];

var employees = [
  {
    name: 'Josefa Robel',
    positionTitle: 'Junior Web Developer',
    phoneNumber: '(496) 261-9509',
    email: 'Josefa.Robel@gmail.com',
		emergencyContact: 'Jane Robel - sister (496) 261-9508',
		birthday: '2/23/1986',
    startDate: '2/6/2012',
    salary: '90,000',
    shirtSize: 'medium',
    badgePhoto: 'https://s3.amazonaws.com/uifaces/faces/twitter/pifagor/128.jpg'
  },
  {
    name: 'Bridie Franecki',
    positionTitle: 'Lead Architect',
    phoneNumber: '(388) 731-3294',
    email: 'Bridie_Franecki@gmail.com',
		emergencyContact: 'Kevin Newhall - friend (388) 371-9328',
		birthday: '10/26/1970',
    startDate: '4/7/2010',
    salary: '200,000',
    shirtSize: 'large',
    badgePhoto: 'https://s3.amazonaws.com/uifaces/faces/twitter/hafeeskhan/128.jpg'
  },
  {
    name: 'Wanda Connelly',
    positionTitle: 'Designer',
    phoneNumber: '(415) 337-2060',
    email: 'Wanda.Connelly86@yahoo.com',
		emergencyContact: 'Kyle Connelly - husband (415) 337-9368',
		birthday: '5/4/1985',
    startDate: '7/23/2014',
    salary: '89,000',
    shirtSize: 'small',
    badgePhoto: 'https://s3.amazonaws.com/uifaces/faces/twitter/fran_mchamy/128.jpg'
  },
  {
    name: 'Carl S. Rogers',
    positionTitle: 'Data Scientist',
    phoneNumber: '(510) 157-1533',
    email: 'Clrogers40@gmail.com',
		emergencyContact: 'Stephen Stain - uncle (650)327-3968',
		birthday: '1/25/1984',
    startDate: '3/17/2013',
    salary: '93,000',
    shirtSize: 'large',
    badgePhoto: 'https://s3.amazonaws.com/uifaces/faces/twitter/shadeed9/128.jpg'
  },
	{
		name: 'Bobby Williams',
		positionTitle: 'Database Engineer',
		phoneNumber: '(650) 347-1624',
		email: 'Bobbie.Williamson33@hotmail.com',
		emergencyContact: 'Jennifer Roy - friend (510)867-7298',
		birthday: '8/7/1982',
		startDate: '1/29/2011',
		salary: '95,000',
		shirtSize: 'large',
		badgePhoto: 'https://s3.amazonaws.com/uifaces/faces/twitter/okseanjay/128.jpg'
	}
];

//READ ALL EMPLOYEES
app.get('/api/employees', function(req, res){
  res.json(employees);
});

//CREATE A NEW EMPLOYEE
app.post('/api/employees', function employeesCreate(req, res) {
  var name = req.body.name;
  var title = req.body.positionTitle;
  var email = req.body.email;
  var phone = req.body.phoneNumber;
  var newEmployee = { name: name, positionTitle: title, email: email, phoneNumber: phone };
  employees.push(newEmployee);
  res.json(employees);
});

//READ ALL COMPANIES
app.get('/api/companies', function(req, res){
  res.json(companies);
});

//CREATE A NEW COMPANY
app.post('/api/companies', function companiesCreate(req, res) {
  var name = req.body.name;
  var newCompany = { name: name };
  companies.push(newCompany);
  res.json(companies);
});


app.get('/welcome/:company_name', function (req, res) {
  res.send( 'Welcome back, ' + req.params.company_name );
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening at http://localhost:3000/');
});
