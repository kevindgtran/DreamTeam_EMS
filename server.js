var express = require('express'),
		bodyParser = require('body-parser'),
		cors = require('cors'),
		mongoose = require('mongoose'),
		db = require('./models'),
		controllers = require('./controllers'),
		app = express(),
		User = require('./models/user'),
		session = require('express-session');



		app.use(cors());
		app.use(express.static('public'));
		app.set('view engine', 'ejs');
		app.use(bodyParser.urlencoded({extended: true}));
		mongoose.createConnection('mongodb://localhost/project-1');
		app.use(session({
  	saveUninitialized: true,
  	resave: true,
  	secret: 'SuperSecretCookie',
  	cookie: { maxAge: 30 * 60 * 1000 } // 30 minute cookie lifespan (in milliseconds)
		}));

		app.get('/signup', function (req, res) {
  	res.render('signup');
		});

		app.get('/login', function (req, res) {
  	res.render('login');
		});

		app.get('/profile', function (req, res) {
  	// find the user currently logged in
  	User.findOne({_id: req.session.userId}, function (err, currentUser) {
    res.render('profile.ejs', {user: currentUser})
  		});
		});


		app.post('/users', function (req, res) {
			User.createSecure(req.body.name, req.body.email, req.body.password, function (err, user) {
	    res.json(user);
			});
			// console.log(req.body);
		});

		app.post('/sessions', function(req, res) {
   db.User.authenticate(req.body.name, req.body.email, req.body.password, function(err, user) {
       if (user) {
           req.session.userId = user._id;
           res.redirect('/profile');
					 console.log('test logged in successful');
       } else {
         res.redirect('/login');
				 console.log('test not logged in');

       }
   });
});



	// get index.html
app.get('/', function(req, res) {
	res.sendFile('views/index.html', {
		root: __dirname
	});
});


app.get('/api/companies', controllers.companies.index);

app.get('api/companies:companyId/employees', controllers.companies.show);







app.listen(3000, function() {
  console.log('listening to http://localhost:3000/');
});
