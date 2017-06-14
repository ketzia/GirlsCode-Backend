const  express = require('express');
// Express is instantiated
const app = express();
//Sirve para reconocer lo que viene en el cuerpo (req.body)
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();


const port = process.env.PORT || 8080;
app.use(bodyParser.json());
app.use(bodyParser.text());
mongoose.connect('mongodb://localhost/test');

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

//edicion y borrar,
get de acuerdo al user_id,
checar si id es valid


*/



exports.module = exports.app;