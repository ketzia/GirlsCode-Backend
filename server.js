const  express = require('express');
const app = express();
//Sirve para reconocer lo que viene en el cuerpo (req.body)
const bodyParser = require('body-parser');

const port = process.env.PORT | 8081;
app.use(bodyParser.json());
app.use(bodyParser.text());
app.listen(port);
console.log("Running at port"+ port);
/* Ejemplo para ver como funciona el bodyparser
app.post('/',function(req,res){
    console.log(req.body)
});

*/



exports.module = exports.app;