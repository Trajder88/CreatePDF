const express = require('express'); 
const viewEngine = require('./config/viewEngine'); 
const initWebRoutes = require('./routes/web'); 
const bodyParser = require('body-parser'); 
const cookieParser = require('cookie-parser'); 
const session = require('express-session'); 
const passport = require('passport'); 
const path = require('path');


let app = express();

app.use(cookieParser('secret'));

// Konfiguracja sesji
app.use(session({
   secret: 'secret',
   resave: true,
   saveUninitialized: false,
   cookie: {
      maxAge: 1000 * 60 * 60 * 24 // 1 dzień
   }
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'node_modules')));

// Konfiguracja widoków
viewEngine(app);

// Konfiguracja passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Inicjalizacja wszystkich tras
initWebRoutes(app);

let port = 8080;

app.listen(port, () => {
   console.log(`Aplikacja działa na porcie ${port}`);
});

