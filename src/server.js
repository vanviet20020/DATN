const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');
const morgan = require('morgan');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

const route = require('./routes');
const { passportConfig } = require('./config/passport');
const { viewEngine } = require('./config/viewsEngine');

// Connect DB
const { connect } = require('./config/connectBD');
connect();

const app = express();

//config body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//config cookie-parser
app.use(cookieParser());

passportConfig(app);

//override with POST having ?_method=[ Tên method (PUT, PATCH, DELETE, OPTIONS)]
app.use(methodOverride('_method'));

// setup the logger
app.use(morgan('tiny'));

viewEngine(app);

route(app);

app.listen(PORT, () => {
    console.log(`Server is runing on http://localhost:${PORT} !!`);
});
