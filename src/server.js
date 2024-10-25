const express = require('express'); // Użyj require zamiast import
const viewEngine = require('./config/viewEngine'); // Użyj require zamiast import
const initWebRoutes = require('./routes/web'); // Użyj require zamiast import
const bodyParser = require('body-parser'); // Użyj require zamiast import
const cookieParser = require('cookie-parser'); // Użyj require zamiast import
const session = require('express-session'); // Użyj require zamiast import
const passport = require('passport'); // Dodaj import dla passport, jeśli nie było go wcześniej
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

