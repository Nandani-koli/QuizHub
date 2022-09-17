const express = require('express');
const router = express.Router();
const homecontent = require('../controller/homedisplay');

router.get('/',homecontent.homecontent);

module.exports = router;