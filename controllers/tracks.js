const { tracksModel } = require('../models');
const handleHttpError = require('../utils/handleError');

const getItems = async (req, res) => {
 
  try {
    const data = await tracksModel.find({});
    res.send({ data });
  } catch (error) {
    handleHttpError(res, "ERROR_GET_ITEMS")
  }

}

const getItem = (req, res) => {
   // const id = req.params.id;
    
    res.send({ data });
}

const createItem = async (req, res) => {
  try {
    const { body } = req;
    //console.log(body);
    const data = await tracksModel.create(body);
    res.send({ data });
  } catch (error) {
    handleHttpError(res, "ERROR_CREATE_ITEM")
  }
}

module.exports = { 
                   getItems, 
                   getItem,
                   createItem
                 };