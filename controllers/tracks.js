const { tracksModel } = require('../models');

const getItems = async (req, res) => {
  /* return new Promise((resolve, reject) => {
    const items = [
      {
        id: 1,
        name: 'Track 1',
        description: 'Track 1 description',
        price: '$10.00',
        image: 'https://via.placeholder.com/150',
      },
      {
        id: 2,
        name: 'Track 2',
        description: 'Track 2 description',
        price: '$20.00',
        image: 'https://via.placeholder.com/150',
      },
      {
        id: 3,
        name: 'Track 3',
        description: 'Track 3 description',
        price: '$30.00',
        image: 'https://via.placeholder.com/150',
      },
      {
        id: 4,
        name: 'Track 4',
        description: 'Track 4 description',
        price: '$40.00',
        image: 'https://via.placeholder.com/150',
      }
    ];
    resolve(items);
  }); */

  const data = await tracksModel.find({});
    res.send({ data });
}

const getItem = (req, res) => {
   // const id = req.params.id;
    
    res.send({ data });
}

const createItem = async (req, res) => {
    const { body } = req;
    console.log(body);
    const data = await tracksModel.create(body);
    res.send({ data });
}

module.exports = { 
                   getItems, 
                   getItem,
                   createItem
                 };