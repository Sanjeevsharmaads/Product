var express = require('express');
var exphbs  = require('express-handlebars');
var url  = require('url');

var app = express()

 
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.use(express.static('public'));

app.get('/sayHello', function (req , res){
	res.render('home');
});

app.get('/update', function (req , res){
	res.render('updatedata');
});


app.get('/add', function (req , res){
	res.render('add');
});

app.get('/', function (req, res) {
  	res.render('add');
});

app.get('/processRequest', function (req, res) {
	var fName = req.query.firstName;
	var lName = req.query.lastName;
	var pass=req.query.password;
	

	var response = {}
	response = {'firstName' : fName, 'lastName' : lName, 'fullName' : fName + lName};

	if(pass==="admin@123"){
		res.render('myhome', {data : response});
}
	else{
		res.render('error',{data:response});
		}
});

app.get('/welcome', function (req, res) {
  res.render('welcome');
});

app.get('/redirectpage', function (req, res){
  res.render('calculator');
});

app.all('/myAccount', function (req, res) {
  res.send('Your account balance is INR 1000000.')
});


app.listen(9000, function() {
	console.log('listening on 9000')
})