const mongoose = require('mongoose');
module.exports = app => {
    const { existsOrError, notExistsOrError } = app.api.utils.validation

    const save = async (req, res) => {
        const product = { ...req.body }
        if (req.params.id || req.params.id === 0) product._id = req.params.id
        try {
            existsOrError(product.photo, 'Image not found')
            existsOrError(product.name, 'Name not found')
            existsOrError(product.category === 0 ? true : product.category, 'Category not found')
            product.category = mongoose.Types.ObjectId(product.category)
            if(product.sub_category || product.sub_category === 0) product.sub_category = mongoose.Types.ObjectId(product.sub_category)
            existsOrError(product.description, 'Description not found')
            existsOrError(product.price, 'Price not found')
            const productFromDB = await app.db.product.findOne({ name: product.name })

            if (!product._id || product._id === 0) {
                notExistsOrError(productFromDB, 'Product not found')
            } else {
                if (productFromDB && product._id != productFromDB._id) throw 'Product alredy registered'
            }
        } catch (msg) {
            return res.status(400).send(msg)
        }

        if (product._id || product._id === 0) {
            try {
                const updatedProduct = await app.db.product.findByIdAndUpdate(product._id, product)
                await updatedProduct.save()
                res.status(204).send()
            } catch (err) {
                res.status(500).send(err)
            }
        } else {
            const newproduct = new app.db.product(product)
            try {
                await newproduct.save()
                res.status(204).send()
            } catch (err) {
                res.status(500).send(err)
            }
        }
    }

    const get = async (req, res) => {
        const products = await app.db.product.find({})
        try {
            res.json(products)
        } catch (err) {
            res.status(500).send(err)
        }
    }

    const remove = async (req, res) => {
        try {
            const product = await app.db.product.findByIdAndDelete(req.params.id)
            if (!product) res.status(404).send("Product not found")
            res.status(200).send()
        } catch (err) {
            res.status(500).send(err)
        }
    }

    return { save, get, remove }
}