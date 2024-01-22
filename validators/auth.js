const { check } = require('express-validator');
const validateResults = require('../utils/hanledValidator');

const validateRegister = [
    check('username').exists().not().isEmpty().isLength({min:2, max:50}).withMessage('mediaId is required'),
    check('age').exists().not().isEmpty().isNumeric({min:0, max:100}).withMessage('mediaId is required'),
    check('email').exists().not().isEmpty().isEmail().withMessage('mediaId is required'),
    check('password').exists().not().isEmpty().isLength({min:6, max:50}).withMessage('mediaId is required'),
    check('rol').exists().not().isEmpty().isEmail().withMessage('mediaId is required'),
    
    (req, res, next) =>{
        return validateResults(req, res, next)
    } 
]

const validateLogin = [
    check('email').not().isEmpty().isEmail().withMessage('mediaId is required'),
    check('password').not().isEmpty().isLength({min:6, max:50}).withMessage('mediaId is required'),
    (req, res, next) => {
        return validateResults(req, res, next)
    } 
]

module.exports = { validateRegister, validateLogin };