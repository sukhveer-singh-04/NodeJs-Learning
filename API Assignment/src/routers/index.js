const express = require('express');
const controllerJPG = require('../controllers/jpg');
const controllerPNG = require('../controllers/png');
const router = express.Router();

router.use('/public-jpg',controllerJPG );
router.use('/public-png',controllerPNG );


module.exports = router;