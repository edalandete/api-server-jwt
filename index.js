const express = require('express');
const passport = require('passport');
const debug = require('debug')('app');
const morgan = require('morgan');
require('dotenv').config();
const authRoutes = require('./src/routes/auth.routes')();
const secureRoute = require('./src/routes/secure.routes');

require('./src/ddbb/mongoose.config');

const app = express();
const port = process.env.PORT || 4000;

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('./src/passport/passport.config')(app);

app.use('/', authRoutes);
app.use('/user', passport.authenticate('jwt', { session: false }), secureRoute);

app.listen(port, debug(`server is running on port ${port}`));
