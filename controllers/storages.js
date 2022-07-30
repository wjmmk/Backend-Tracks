const fs = require('fs');
const { matchedData } = require('express-validator');
const { storagesModel } = require('../models');
const handleHttpError = require('../utils/handleError');

const PUBLIC_URL = process.env.PUBLIC_URL;
const MEDIA_PATH = `${__dirname}/../uploads`;

const getItems = async (req, res) => {
  try {
    const data = await storagesModel.find({});
    res.send({ data });
  } catch (error) {
    handleHttpError(res, "ERROR_LIST_ITEMS")
  }  
}

const getItem = async (req, res) => {
   try {
      req = matchedData(req);
      const { id } = req;
      const data = await storagesModel.findById({_id:id});
      res.send({ data });
   } catch (error) {
     handleHttpError(res, "ERROR_GET_ITEM")
   } 
}

const createItem = async (req, res) => {
    try {
      const { file } = req;
      const fileData = {
        filename: file.filename,
        url: `${PUBLIC_URL}/${file.filename}`,
      }

      const data = await storagesModel.create(fileData);
      res.send({ data });

    } catch (error) {
      handleHttpError(res, "ERROR_CREATE_ITEM")
    }
}

const deleteItem = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;
    const data = await storagesModel.delete({_id:id});
    const filePath = `${MEDIA_PATH}/${data.filename}`;
    fs.unlinkSync(filePath);
    res.send({ data });
  } catch (error) {
    handleHttpError(res, "ERROR_DELETE_ITEM")
  }
}

module.exports = { 
                   getItems, 
                   getItem,
                   createItem,
                   deleteItem
                 };