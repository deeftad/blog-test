const mongoose = require('mongoose')
const marked = require('marked')
const createDomPurify=require('dompurify')
const { JSDOM } = require('jsdom')
const dompurify = createDomPurify(new JSDOM().window)

const productSchema = new mongoose.Schema({
    title:{
        type: String,
        require: true
    },
    author:{
        type: String,
        require: true
    },
    url:{
        type: String,
        require:true,
        unique: true
    },
    createAt: {
        type: Date,
        default: Date.now
    },
    image: {
        type: Buffer,
        require: true
    },
    description: {
        type: String
    },
    slug:{
        type: String,
        require: true
    },
    santinizedHTML:{
        type: String,
        require: true
    }
})

productSchema.pre('validate',function(next){
    if(this.title){
        this.slug= slugify(this.title,{ lower: true, strict: true })
    }

})

module.exports = mongoose.model('Products',productSchema)
