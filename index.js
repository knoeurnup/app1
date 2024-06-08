const express = require('express');
const app = express();


app.get('/', function(req, res){
	res.send("Hello app1 is deploying...");
});

app.get('/getting', function(req, res){
	res.send("hello world in app1 is deployed");
});


app.listen(8080,function(){
	console.log('app is running in port 8080');
})


