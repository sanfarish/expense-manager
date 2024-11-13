const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');

const routes = require("./routes");
const notFound = require('./middlewares/notFound');

app.use(express.json({
    verify: (req, res, buf, encoding) => {
        try {
            JSON.parse(buf);
        } catch (err) {
            res.status(400).json({
                message: `invalid JSON, ${err.message}`
            });
        };
    }
}));
app.use(cors());
app.use(morgan('dev'));

app.get([ "/api", "/api/v1" ], (req, res) => res.status(301).redirect('/api/v1/docs'));

app.use('/api', routes);

app.use('*', notFound);

module.exports = app;
