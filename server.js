var express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    db = require('./models'),
    controllers = require('./controllers'),
    app = express();
var User = require('./models/user');

// middleware
app.use(cors());
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
// mongoose.connect('mongodb://localhost/Project-1');

/***********
 * ROUTES *
 ***********/

app.get('/signup', function (req, res) {
  res.render('signup');
});

app.post('/users', function (req, res) {
  User.createSecure(req.body.email, req.body.password, function (err, user) {
    res.json(user);
  });
});


app.get('/login', function (req, res) {
  res.send('login coming soon!');
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
