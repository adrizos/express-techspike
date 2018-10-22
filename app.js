var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var expressValidator = require('express-validator');
var app = express();

/* Middleware */



// var logger = function(req, res, next){
//   console.log('Logging...');
//   next();
// }
// app.use(logger);


/*
Specify view engine
run npm ejs --save from the command line.
this will auto include ejs in the package.json file under dependencies
*/
app.set('view engine', 'ejs');

/*
next we'll specify what folder we want to use for views
I've also created a /views directory in the root
*/
app.set('views', path.join(__dirname, 'views'));

// body parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false})); //writing documentation for bodyParser




// Set static path
app.use(express.static(path.join(__dirname, 'public')));

// expressValidator Middleware
app.use(expressValidator(

var users = [
  {
    id: 2,
    firstName: 'Pete',
    lastName: 'Davidson',
    email: 'petepetepete@gmail.com'
  },
  {
    id: 2,
    firstName: 'Jenny',
    lastName: 'Lewis',
    email: 'rilokileysinger@yahoo.com'
  },
  {
    id: 3,
    firstName: 'Darby',
    lastName: 'Crash',
    email: 'thegerms@gmail.com'
  }
]


app.get('/', function(req, res){
  //var title = 'Customers';
  res.render('index', {
    title: 'Customers',
    users: users
  });
});

app.post('/users/add', function(req,res){
  var newUser = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email
  }
  console.log(newUser);
});


app.listen(3000, function(){
  console.log('server started on Port 3000...'); `  `
})
