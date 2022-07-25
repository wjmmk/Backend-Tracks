const mongoose = require('mongoose')


const TrackSchema = mongoose.Schema({
    
         name: {
            type: String,
         }, 
         album: {
            type: String,
         },
         cover: {
            type: String,
            validate: {
                validate: (req) => {
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

module.exports = mongoose.model('Tracks', TrackSchema);