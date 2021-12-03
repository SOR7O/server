var fs = require('fs');
var path = require('path');
var FILE = path.join(__dirname, './prod_at.ini');
var express = require('express');

var app = express();

const puerto = 80;

app.listen(puerto, function(){
console.log('Servidor http corriendo en el puerto',puerto);
})

app.get ('/', function(resq, res){
    var fs = require('fs');
    var path = require('path');
    var FILE = path.join(__dirname, './prod_at.ini');
    res.send(FILE);
    console.log('se recibio una peticion de tipo get');
});