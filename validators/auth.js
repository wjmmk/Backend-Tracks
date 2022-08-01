const { check } = require('express-validator');
const validateResult = require('../utils/hanledValidator');

const validateRegister = [
    check('username').not().isEmpty().isMongoId().isLength({min:2, max:50}).withMessage('mediaId is required'),
    check('age').not().isEmpty().isInt({min:0, max:100}).withMessage('mediaId is required'),
    check('email').not().isEmpty().isEmail().withMessage('mediaId is required'),
    check('password').not().isEmpty().isLength({min:6, max:50}).withMessage('mediaId is required'),
    
   // (req, res, next) => validateResult(req, res, next)
]

const validateLogin = [
    check('email').not().isEmpty().isEmail().withMessage('mediaId is required'),
    check('password').not().isEmpty().isLength({min:6, max:50}).withMessage('mediaId is required'),
    (req, res, next) => validateResult(req, res, next)
]

module.exports = { validateRegister, validateLogin };