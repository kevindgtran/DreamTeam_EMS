// var app = express();

	name: String,
	positionTitle: String,
  phoneNumber: String,    //changed from number
	email: String,
	birthday: String,
	equity: String,
	fullTime: Boolean,
	startDate: String,
	salary: String,        //changed from nuber
	shirtSize: String,
	favoriteFoods: [Array],
	allergies: [Array],
  badgePhoto: String     //added for personality

var employees = [
  {
    name: 'Josefa Robel',
    positionTitle: 'Junior Web Developer',
    phoneNumber: '(496)261-9509',
    email: 'Josefa.Robel@gmail.com',
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
    name: 'Bridie Franecki IV',
    positionTitle: 'Lead Architect',
    phoneNumber: '(388)731-3294 x470',
    email: 'Bridie_Franecki@gmail.com',
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
    phoneNumber: '(415)337-2060',
    email: 'Wanda.Connelly86@yahoo.com',
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
    phoneNumber: '(510)157-1533',
    email: 'Clrogers40@gmail.com',
    birthday: '1/25/1984',
    equity: '.9',
    fullTime: true,
    startDate: '3/17/2013',
    salary: '93,000',
    shirtSize: 'large',
    favoriteFoods: ['steak', 'potatoes', 'protein shakes'],
    allergies: ['losing'],
    badgePhoto: 'https://s3.amazonaws.com/uifaces/faces/twitter/shadeed9/128.jpg'
  }
];



// app.listen(3000, function() {
//   console.log('listening to http://localhost:3000/');
// });
