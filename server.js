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
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
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