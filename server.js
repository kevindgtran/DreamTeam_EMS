var express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    db = require('./models'),
    controllers = require('./controllers'),
    app = express()





app.use(cors());
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));



/***********
 * ROUTES *
 ***********/



mongoose.createConnection('mongodb://localhost/project-1');
app.use(session({
    saveUninitialized: true,
    resave: true,
    secret: 'SuperSecretCookie',
    cookie: {
        maxAge: 30 * 60 * 1000
    } // 30 minute cookie lifespan (in milliseconds)
}));

/***********
 * ROUTES *
 ***********/

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




/***********
 * SERVER *
 ***********/




app.listen(3000, function() {
    console.log('listening to http://localhost:3000/');
});
