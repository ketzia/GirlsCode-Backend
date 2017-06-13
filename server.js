const  express = require('express');
// Express is instantiated
const app = express();
//Sirve para reconocer lo que viene en el cuerpo (req.body)
const bodyParser = require('body-parser');
require('dotenv').config();


const port = process.env.PORT || 8080;
app.use(bodyParser.json());
app.use(bodyParser.text());


const api_routes = require('./app/index');
api_routes(app);


app.listen(port,
    function(){
        console.log("Running at port "+ port);
    }
);

/* Ejemplo para ver como funciona el bodyparser
app.post('/',function(req,res){
    console.log(req.body)
});

*/



exports.module = exports.app;