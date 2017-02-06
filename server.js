var express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    db = require('./models'),
    controllers = require('./controllers'),
    app = express(),
    User = require('./models/user'),
    session = require('express-session');

// middleware
app.use(cors());
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
  saveUninitialized: true,
  resave: true,
  secret: 'SuperSecretCookie',
  cookie: { maxAge: 30 * 60 * 1000 } // 30 minute cookie lifespan (in milliseconds)
}));

/***********
 * ROUTES *
 ***********/

app.get('/signup', function (req, res) {
  res.render('signup');
});

app.post('/users', function (req, res) {
  User.createSecure(req.body.email, req.body.password, function (err, newUser) {
    req.session.userId = newUser._id;
    res.redirect('index');
  });
});


app.get('/login', function (req, res) {
  res.render('login');
});

app.post('/sessions', function (req, res) {
  User.authenticate(req.body.email, req.body.password, function (err, user) {
    req.session.userId = user._id;
    res.redirect('index');
  });
});

// app.get('/dashboard', function (req, res) {
//   User.findOne({_id: req.session.userId}, function (err, currentUser) {
//     res.render('dashboard.ejs', {user: currentUser})
//   });
// });

app.get('/index', function (req, res) {
  User.findOne({_id: req.session.userId}, function (err, currentUser) {
    res.render('index.ejs', {user: currentUser})
  });
});

app.get('/logout', function (req, res) {
  req.session.userId = null;
  res.redirect('/login');
});

// get index.html
app.get('/', function(req, res) {
    res.sendFile('views/index.html', {
        root: __dirname
    });
});

app.get('/api/companies', controllers.companies.index);
app.get('/api/companies/:companyId', controllers.companies.show);

app.get('/api/companies/:companyId/employees', controllers.employee.index);
app.post('/api/companies/:companyId/employees', controllers.employee.create);
app.delete('/api/companies/:companyId/employees', controllers.employee.destroy);

/***********
 * SERVER *
 ***********/

app.listen(process.env.PORT || 3000, function() {
    console.log('listening to http://localhost:3000/');
});
