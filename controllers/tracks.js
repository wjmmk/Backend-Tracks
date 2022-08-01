const { matchedData } = require('express-validator');
const { tracksModel } = require('../models/index');
const handleHttpError = require('../utils/handleError');

const getItems = async (req, res) => {
 
  try {
    const user = req.userDb;
    const data = await tracksModel.find({});
    res.send({ data, user });
  } catch (error) {
    handleHttpError(res, "ERROR_GET_ITEMS")
  }

}

const getItem = async (req, res) => {
   // const id = req.params.id;

    try {
      req = matchedData(req);
      const { id } = req;
      const data = await tracksModel.findById(id);
      res.send({ data });
    } catch (error) {
      handleHttpError(res, "ERROR_GET_ITEM")
    }
}

const createItem = async (req, res) => {
  try {

    const body = matchedData(req);
    const data = await tracksModel.create(body);
    res.send({ data });
  } catch (error) {
    handleHttpError(res, "ERROR_CREATE_ITEM")
  }
}

const updateItem = async (req, res) => {
  try {

    const { id, ...body } = matchedData(req);
   
    const data = await tracksModel.findOneAndUpdate(id, body);
    res.send({ data });
  } catch (error) {
    handleHttpError(res, "ERROR_UPDATE_ITEM")
  }
}

const deleteItem = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;
    const data = await tracksModel.delete({_id:id});
    res.send({ data });
  } catch (error) {
    handleHttpError(res, "ERROR_DELETE_ITEM")
  }
}

module.exports = { 
                   getItems, 
                   getItem,
                   createItem,
                   updateItem,
                   deleteItem
                 };