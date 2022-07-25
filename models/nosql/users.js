const mongoose = require('mongoose')


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

module.exports = mongoose.model('Users', UserSchema);