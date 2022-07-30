const mongoose = require('mongoose')
const MongooseDelete = require('mongoose-delete')


const UserSchema = mongoose.Schema({
    
         username: {
              type: String,
         }, 
         age: {
                type: Number,
         }, 
         email: {
                type: String,
                unique: true,
         },
         password: {
            type: String,
        },
         role: {
            type: ["user", "admin"],
            default: "user",
         },
            
        },
        {
            timestamps: true,
            versionKey: false,
        }
    );

UserSchema.plugin(MongooseDelete, { overrideMethods: 'all' });    

module.exports = mongoose.model('Users', UserSchema);