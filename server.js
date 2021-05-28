const path = require('path');
const express = require('express');
const nodemailer = require("nodemailer");
const multiparty = require("multiparty");
require("dotenv").config();
const cors = require("cors");
const routes = require('./controllers');
const session = require('express-session');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');
const hbs = exphbs.create({ helpers });
const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

//handlebards middleware 
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Express MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// cors
app.use(cors({ origin: "*" }));

app.use(express.static(path.join(__dirname, './public')));
app.use(express.static('views/images')); 

// create transporter object
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com", //email provider is gmail
  port: 465, //if not working try 25, 465, 587 or 2525 // 465 is always true
  // secure: true,
  auth: {
    user: process.env.DB_EMAIL,
    pass: process.env.DB_PASS,
  }
});

// verify connection configuration
// transporter.verify(function (error, success) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Server is ready to take our messages");
//   }
// });

// POST route for NODEMAILER contact form
app.post("/contact-us/send", (req, res) => {
// Accepts the form data submitted and parse it using multiparty
let form = new multiparty.Form();
let data = {};
form.parse(req, function (err, fields) {
  console.log(fields);
  Object.keys(fields).forEach(function (property) {
  data[property] = fields[property].toString();
});

// Create a mail object
// const mail = {
//   from: data.name,
//   to: process.env.DB_EMAIL,
//   subject: data.subject,
//   text: `${data.name} <${data.email}> \n${data.message}`,
// };

// // Use transporter.sendMail() to send the email
// transporter.sendMail(mail, (err, data) => {
//   if (err) {
//     console.log(err);
//     res.status(500).send("Something went wrong.");
//   } else {
//    res.status(200).send("Email successfully sent to recipient!")
//  }
// });
});
});

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false}).then(() => {
  app.listen(PORT, () => console.log('Now listening on: http://localhost:' + PORT));
});


// cf nodemailer tutorial at https://github.com/victoria-lo/Nodemailer-Tutorial



// const path = require('path');
// const express = require('express');
// const session = require('express-session');
// const exphbs = require('express-handlebars');
// // const helpers = require('./utils/helpers');

// const app = express();
// const PORT = process.env.PORT || 3001;

// const sequelize = require('./config/connection');
// const SequelizeStore = require('connect-session-sequelize')(session.Store);

// const sess = {
//   secret: 'Super secret secret',
//   cookie: {},
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize
//   })
// };

// app.use(session(sess));

// // const hbs = exphbs.create({ helpers });

// // app.engine('handlebars', hbs.engine);
// app.engine('handlebars', exphbs.engine);
// app.set('view engine', 'handlebars');

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));

// app.use(require('./controllers/'));

// sequelize.sync({ force: false }).then(() => {
//   app.listen(PORT, () => console.log('Now listening on: http://localhost:' + POST));
// });

