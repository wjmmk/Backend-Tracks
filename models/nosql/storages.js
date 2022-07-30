const mongoose = require('mongoose')
const MongooseDelete = require('mongoose-delete');


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

StorageSchema.plugin(MongooseDelete, { overrideMethods: 'all' });    

module.exports = mongoose.model('Storages', StorageSchema);