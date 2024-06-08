const express = require('express');
const app = express();


app.get('/', function(req, res){
	res.send("Hello app1 is deploying...");
});

app.get('/getting', function(req, res){
	res.send("hello world in app1 is deployed");
});

app.get('/getting1', function(req, res){
	res.send("hello world1 in app1 is deployed");
});


app.get('/new', function(req, res){
	res.send("hello worldnew1 in app1 is deployed");
});

app.listen(8080,function(){
	console.log('app is running in port 8080');
})


