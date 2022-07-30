const { check } = require('express-validator');

const validateResult = require('../utils/hanledValidator');

const validateGetItem = [

    check('id').not().isEmpty().isMongoId().withMessage('mediaId is required'),
    (req, res, next) => validateResult(req, res, next)
]

module.exports = { validateGetItem };