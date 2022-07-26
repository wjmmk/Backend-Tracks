const { storagesModel } = require('../models');

const PUBLIC_URL = process.env.PUBLIC_URL;

const getItems = async (req, res) => {

  const data = await storagesModel.find({});
    res.send({ data });
}

const getItem = (req, res) => {
   // const { id } = req.params;
    res.send({ data });
}

const createItem = async (req, res) => {
    const { body, file } = req;
   // console.log(body, file);
    const fileData = {
        filename: file.filename,
        url: `${PUBLIC_URL}/${file.filename}`,
    }

    const data = await storagesModel.create(fileData);
    res.send({ data });
    
}

module.exports = { 
                   getItems, 
                   getItem,
                   createItem
                 };