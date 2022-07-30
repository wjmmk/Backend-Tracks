const express = require('express');
const router = express.Router();

const {validateGetItem} = require('../validators/storages');
const uploadMidleware  = require('../utils/hanledStorage');
const { getItems, getItem, createItem, deleteItem } = require('../controllers/storages');


router.get("/", getItems)
router.get("/:id", validateGetItem, getItem)
router.delete("/:id", validateGetItem, deleteItem)
router.post("/", uploadMidleware.single("myfile"), createItem)


module.exports = router;