var db = require('./models');

var companiesList = [
  {
    name: 'Katie Gizmos & Gadgets',
    description: 'mobile apps for entreprenuers',
    userName: 'katiegizmo',
    password: 'mobileapps',
    email: 'katie@gizmo.com',

  }
];

var employeesList = [
  {
    name: 'Josefa Robel',
    positionTitle: 'Junior Web Developer',
    phoneNumber: '(496) 261-9509',
    email: 'Josefa.Robel@gmail.com',
		emergencyContact: 'Jane Robel - sister (496) 261-9508',
		birthday: '2/23/1986',
    equity: '.5',
    fullTime: true,
    startDate: '2/6/2012',
    salary: '90,000',
    shirtSize: 'medium',
    favoriteFoods: ['tacos', 'mcdonald french fries'],
    allergies: [],
    badgePhoto: 'https://s3.amazonaws.com/uifaces/faces/twitter/pifagor/128.jpg'
  },
  {
    name: 'Bridie Franecki',
    positionTitle: 'Lead Architect',
    phoneNumber: '(388) 731-3294',
    email: 'Bridie_Franecki@gmail.com',
		emergencyContact: 'Kevin Newhall - friend (388) 371-9328',
		birthday: '10/26/1970',
    equity: '1.7',
    fullTime: true,
    startDate: '4/7/2010',
    salary: '200,000',
    shirtSize: 'large',
    favoriteFoods: ['fish and chips', 'soups', 'beer'],
    allergies: ['peanuts'],
    badgePhoto: 'https://s3.amazonaws.com/uifaces/faces/twitter/hafeeskhan/128.jpg'
  },
  {
    name: 'Wanda Connelly',
    positionTitle: 'Designer',
    phoneNumber: '(415) 337-2060',
    email: 'Wanda.Connelly86@yahoo.com',
		emergencyContact: 'Kyle Connelly - husband (415) 337-9368',
		birthday: '5/4/1985',
    equity: '.8',
    fullTime: true,
    startDate: '7/23/2014',
    salary: '89,000',
    shirtSize: 'small',
    favoriteFoods: ['tacos', 'ice-cream', 'chocolate cookies'],
    allergies: ['Tide laundry detergent'],
    badgePhoto: 'https://s3.amazonaws.com/uifaces/faces/twitter/fran_mchamy/128.jpg'
  },
  {
    name: 'Carl S. Rogers',
    positionTitle: 'Data Scientist',
    phoneNumber: '(510) 157-1533',
    email: 'Clrogers40@gmail.com',
		emergencyContact: 'Stephen Stain - uncle (650)327-3968',
		birthday: '1/25/1984',
    equity: '.9',
    fullTime: true,
    startDate: '3/17/2013',
    salary: '93,000',
    shirtSize: 'large',
    favoriteFoods: ['steak', 'potatoes', 'protein shakes'],
    allergies: ['losing'],
    badgePhoto: 'https://s3.amazonaws.com/uifaces/faces/twitter/shadeed9/128.jpg'
  },
	{
		name: 'Bobby Williams',
		positionTitle: 'Database Engineer',
		phoneNumber: '(650) 347-1624',
		email: 'Bobbie.Williamson33@hotmail.com',
		emergencyContact: 'Jennifer Roy - friend (510)867-7298',
		birthday: '8/7/1982',
		equity: '.8',
		fullTime: true,
		startDate: '1/29/2011',
		salary: '95,000',
		shirtSize: 'large',
		favoriteFoods: ['orange juice', 'strawberries', 'pancakes'],
		allergies: [''],
		badgePhoto: 'https://s3.amazonaws.com/uifaces/faces/twitter/okseanjay/128.jpg'
	},
	{
		name: 'Tony Casper',
		positionTitle: 'Software Engineer',
		phoneNumber: '(510) 578-7065',
		email: 'Tina_Casper@hotmail.com',
		emergencyContact: 'Rick James - friend (408)892-9098',
		birthday: '2/22/1974',
		equity: '.8',
		fullTime: true,
		startDate: '8/12/2013',
		salary: '112,000',
		shirtSize: 'large',
		favoriteFoods: ['bacon', 'more bacon'],
		allergies: ['shellfish'],
		badgePhoto: 'https://s3.amazonaws.com/uifaces/faces/twitter/n1ght_coder/128.jpg'
	},
	{
		name: 'Burley Hickle',
		positionTitle: 'Senior Developer',
		phoneNumber: '(510) 136-5482',
		email: 'Burley_Hickle50@yahoo.com',
		emergencyContact: 'Tommy Ferrel - cousin (510)873-9892',
		birthday: '2/22/1974',
		equity: '1.2',
		fullTime: true,
		startDate: '9/3/2012',
		salary: '135,000',
		shirtSize: 'extra-large',
		favoriteFoods: ['pizza', 'beer', 'chicken wings'],
		allergies: [],
		badgePhoto: 'https://s3.amazonaws.com/uifaces/faces/twitter/scottfeltham/128.jpg'
	},
	{
		name: 'Neha Kuhic',
		positionTitle: 'Quality Assurance Engineer',
		phoneNumber: '(408) 447-7489',
		email: 'Neha.Kuhic@gmail.com',
		emergencyContact: 'Adrian Khan - cousin (510)873-9992',
		birthday: '6/28/1983',
		equity: '.9',
		fullTime: true,
		startDate: '9/15/2012',
		salary: '109,000',
		shirtSize: 'medium',
		favoriteFoods: ['wraps'],
		allergies: [],
		badgePhoto: 'https://s3.amazonaws.com/uifaces/faces/twitter/algunsanabria/128.jpg'
	}
];

companiesList.forEach(function(company) {
  company.employees = employeesList;
});

db.Employee.remove({}, function(err, employees) {
  console.log('removed all employees');
  db.Employee.create(employeesList, function(err, employees){
    if (err) {
      console.log(err);
      return;
    }
    console.log('recreated all employees');
    console.log("created", employeesList.length, "employees");

    db.Company.remove({}, function (err, companies) {
      console.log("removed all companies");
      db.Company.create(companiesList, function(err, companies) {
        if (err) {
          console.log(err);
          return;
        }
        console.log('recreated all companies');
        console.log('created', companiesList.length, 'companies');
        process.exit();
      });
    });
  });
});
