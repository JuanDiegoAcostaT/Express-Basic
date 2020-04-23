const express = require('express');
const app = express();
const path = require('path')
const routes = require('./routes/index')
const bodyParser = require('body-parser');


// Settings

app.set('port', process.env.PORT || 3000);

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs'); 


// Middlewares

app.use((req, res, next) => {
    console.log(`${req.url} ${req.method}`);
    next();
})

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));


// Routes

app.use(routes);


// Static Files

app.use(express.static(path.join(__dirname, '/public')));


// Start The server

app.listen(app.get('port'), () => {
    console.log(' Server on port:',app.get('port'))
})