const mongoose = require('mongoose');
const MongooseDelete = require('mongoose-delete');


const TrackSchema = new mongoose.Schema({
    
         name: {
            type: String,
         }, 
         album: {
            type: String,
         },
         cover: {
            type: String,
            validate: {
                validator: (req) => {
                    return true;
                },
            message: "Error_URL_Not_Valid"    
            }
         },  
         artist:  {
            name: {
                type: String,
            },
            nickname: {
                type: String,
            },
            nationality: {
                type: String
            }
        },
         duration: {
            start: {
                type: Number,
            },
            end: {
                type: Number
            }
         },
         mediaId: {
            type: mongoose.Types.ObjectId,
         }      
        },
    
           {
                timestamps: true,
                versionKey: false,
           }
    );


TrackSchema.plugin(MongooseDelete, { overrideMethods: 'all' });

module.exports = mongoose.model('Tracks', TrackSchema);