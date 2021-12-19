const mongoose = require('mongoose');
module.exports = app => {
    const { existsOrError, notExistsOrError } = app.api.utils.validation

    const save = async (req, res) => {
        const order = { ...req.body }
        if (req.params.id || req.params.id === 0) order._id = req.params.id
        
        try {
            existsOrError(order.photo, 'Image not found')
            existsOrError(order.name, 'Name not found')
            existsOrError(order.category === 0 ? true : order.category, 'Category not found')
            order.category = mongoose.Types.ObjectId(order.category)
            if(order.sub_category || order.sub_category === 0) order.sub_category = mongoose.Types.ObjectId(order.sub_category)
            existsOrError(order.description, 'Description not found')
            existsOrError(order.price, 'Price not found')
            const orderFromDB = await app.db.order.findOne({ name: order.name })

            if (!order._id || order._id === 0) {
                notExistsOrError(orderFromDB, 'order not found')
            } else {
                if (orderFromDB && order._id != orderFromDB._id) throw 'order alredy registered'
            }
        } catch (msg) {
            return res.status(400).send(msg)
        }

        if (order._id || order._id === 0) {
            try {
                const updatedorder = await app.db.order.findByIdAndUpdate(order._id, order)
                await updatedorder.save()
                res.status(204).send()
            } catch (err) {
                res.status(500).send(err)
            }
        } else {
            const neworder = new app.db.order(order)
            try {
                await neworder.save()
                res.status(204).send()
            } catch (err) {
                res.status(500).send(err)
            }
        }
    }

    const get = async (req, res) => {
        const orders = await app.db.order.find({})
        try {
            res.json(orders)
        } catch (err) {
            res.status(500).send(err)
        }
    }

    const remove = async (req, res) => {
        try {
            const order = await app.db.order.findByIdAndDelete(req.params.id)
            if (!order) res.status(404).send("order not found")
            res.status(200).send()
        } catch (err) {
            res.status(500).send(err)
        }
    }

    return { save, get, remove }
}