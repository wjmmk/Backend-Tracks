const express = require('express');
const router = express.Router();

const uploadMidleware  = require('../utils/hanledStorage');
const { getItems, getItem, createItem } = require('../controllers/storages');


router.get("/", getItems)
router.get("/:id", getItem)
router.post("/", uploadMidleware.single("myfile"), createItem)


module.exports = router;