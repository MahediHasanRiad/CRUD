const ProductModel = require("../Models/ProductModel");

// Create Product
exports.CreateProduct = (req, res) => {
    const createData = req.body;
    ProductModel.create(createData, (err, data) => {
        if(err){
            res.json({massage: 'Create Error Found', err})
        }else{
            res.json({massage: 'Create Success', data})
        }
    })
}

// Show product
exports.ShowProducts = (req, res) => {
    const query = {}

    ProductModel.find(query, (err,data) => {
        if(err){
            res.json({massage: 'Show Product Error Found', err})
        }else{
            res.json({massage: 'Show Product Success', data})
        }
    })
}


// update Product 
exports.UpdateProduct = (req, res) => {
    const id = req.params.id
    const proId = {_id: id}
    const update = req.body

    ProductModel.updateOne(proId, update, (err, data) => {
        if(err){
            res.json({massage: 'Update Product Error Found', err})
        }else{
            res.json({massage: 'Update Product Success', data})
        }
    })
}


// Delete Product
exports.DeleteProduct = (req, res) => {

    const id = req.params.id
    const proId = {_id: id}

    ProductModel.deleteOne(proId, (err, data) => {
        if(err){
            res.json({massage: 'Delete Product Error Found', err})
        }else{
            res.json({massage: 'Delete Product Success', data})
        }
    })
}