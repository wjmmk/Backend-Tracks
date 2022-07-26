const mongoose = require('mongoose')


const StorageSchema = mongoose.Schema({
    
         url: {
              type: String,
         }, 
         filename: {
                type: String,
         }, 
       
        },
           {
                timestamps: true,
                versionKey: false,
           }
    );

module.exports = mongoose.model('Storages', StorageSchema);