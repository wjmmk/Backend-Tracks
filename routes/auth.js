const express = require('express');
const router = express.Router();
const { validateLogin, validateRegister } = require('../validators/auth');
const { loginController, registerController } = require('../controllers/auth');




router.post('/register', validateRegister, registerController);
router.post('/login', validateLogin, loginController);


module.exports = router;