const routers = require('express').Router()
const { CreateProduct, ShowProducts, UpdateProduct, DeleteProduct } = require('../Controllers/ProductController')


// CRUD routes
routers.post('/CreateProduct', CreateProduct)
routers.get('/ShowProducts', ShowProducts)
routers.post('/UpdateProduct/:id', UpdateProduct)
routers.get('/DeleteProduct/:id', DeleteProduct)


module.exports = routers