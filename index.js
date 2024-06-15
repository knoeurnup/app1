const express = require('express');
const app = express();

app.get('/', function(req, res){
	res.send("Hello app1 is deploying...");
});

app.get('/hello', function(req, res){
	res.send("Say hello from app1");
});


app.get('/hi', function(req, res){
	res.send("Say hi from app1");
});

app.get('/test', function(req, res){
	res.send("App1 new test url ");
});

app.get('/use',function(req, res){
	res.send("App1- user api url");
});

app.listen(8080,function(){
	console.log('app is running in port 8080');
});