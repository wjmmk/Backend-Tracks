const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/session');
const checkRol = require('../middleware/rol');
const { validateCreateItem, validateGetItem } = require('../validators/tracks');
const { getItems, getItem, createItem, updateItem, deleteItem } = require('../controllers/tracks');

router.get("/", authMiddleware, getItems)
router.get("/:id", authMiddleware, validateGetItem, getItem)
router.post("/", authMiddleware, checkRol(['admin']), validateCreateItem, createItem)
router.put("/:id", authMiddleware, validateGetItem, validateCreateItem, updateItem)
router.delete("/:id", authMiddleware, validateGetItem, deleteItem)


module.exports = router;