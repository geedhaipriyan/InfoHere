const express = require('express');

const router = express.Router();

//home controller routing
const HomeController = require('../controllers/home_controller');
console.log('router loaded');

router.get('/', HomeController.home);

module.exports = router;