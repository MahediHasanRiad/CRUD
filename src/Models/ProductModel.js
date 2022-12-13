const {Schema, model} = require('mongoose')

const ProductSchema = Schema({
    ProductName: {type: String},
    ProductCode: {type: String},
    img: {type: String},
    UnitPrice: {type: String},
    Quantity: {type: String},
    TotalPrice: {type: String},
    CreateDate: {type: Date, default: Date.now()}
}, {versionKey: false})

const ProductModel = model('products', ProductSchema)

module.exports = ProductModel