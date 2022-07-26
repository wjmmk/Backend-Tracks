const express = require('express');
const router = express.Router();
const validateCreateItem = require('../validators/tracks');
const { getItems, getItem, createItem } = require('../controllers/tracks');

router.get("/", getItems)
router.get("/:id", getItem)
router.post("/", validateCreateItem, createItem)


module.exports = router;