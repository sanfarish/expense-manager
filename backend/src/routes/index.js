const express = require("express");
const router = express.Router();
const swaggerUI = require('swagger-ui-express');
const docsV1 = require('../docs/v1/swagger.json');
const authV1 = require('./v1/auth');
const dataV1 = require('./v1/data');

router.use("/v1", authV1);
router.use("/v1", dataV1);
router.use("/v1/docs", swaggerUI.serve, swaggerUI.setup(docsV1));

module.exports = router;
