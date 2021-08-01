const mongoose= require('mongoose')

const userSchema = new mongoose.Schema({
    id:{
        type: String,
        require: true,
        unique: true
    },

    name:{
        type: String,
        require: true
    },

    email: {
        type: String,
        require: true
    },

    passwords:{
        type: String,
        require: true
    }
})

module.exports = mongoose.model('User',userSchema)