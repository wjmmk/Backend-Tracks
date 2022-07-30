const express = require('express');
const router = express.Router();
const { validateCreateItem, validateGetItem } = require('../validators/tracks');
const { getItems, getItem, createItem, updateItem, deleteItem } = require('../controllers/tracks');

router.get("/", getItems)
router.get("/:id", validateGetItem, getItem)
router.post("/", validateCreateItem, createItem)
router.put("/:id", validateGetItem, validateCreateItem, updateItem)
router.delete("/:id", validateGetItem, deleteItem)


module.exports = router;