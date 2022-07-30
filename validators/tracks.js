const { check } = require('express-validator');

const validateResult = require('../utils/hanledValidator');

const validateCreateItem = [
    check('name').not().isEmpty().withMessage('Name is required').isLength({ min: 2 }).withMessage('Name must be at least 2 characters long'),
    check('album').not().isEmpty().withMessage('Album is required'),
    check('cover').not().isEmpty().withMessage('Cover is required'),
    check('artist.name').not().isEmpty().withMessage('Artist name is required'),
    check('artist.nickname').not().isEmpty().withMessage('Artist nickname is required'),
    check('artist.nationality').not().isEmpty().withMessage('Artist nationality is require'),
    check('duration.start').not().isEmpty().withMessage('Duration start is required'),
    check('duration.end').not().isEmpty().withMessage('Duration end is required'),
    check('mediaId').not().isEmpty().isMongoId().withMessage('mediaId is required'),

    (req, res, next) => validateResult(req, res, next)
]


const validateGetItem = [

    check('id').not().isEmpty().isMongoId().withMessage('mediaId is required'),
    (req, res, next) => validateResult(req, res, next)
]

module.exports = { validateCreateItem, validateGetItem }; 