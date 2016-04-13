var express = require ('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static('./public'));	//o middleware de arquivos estáticos

app.use(bodyParser.json());

app.set('secret', 'admin'); 

consign({cwd: 'app'})
	.include('models')
    .then('api')
    .then('routes/auth.js')
    .then('routes')
    .into(app);

module.exports = app;