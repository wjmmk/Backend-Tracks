const express = require('express');
const router = express.Router();
const { validateLogin, validateRegister } = require('../validators/auth');
const { loginController, registerController, getItems } = require('../controllers/auth');


// Routes: http://localhost:3001/api/auth/{login,register,users}
router.get("/users", getItems)
router.post('/register',validateRegister, registerController);
router.post('/login', validateLogin, loginController);


module.exports = router;