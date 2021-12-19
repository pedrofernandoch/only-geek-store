module.exports = app => {
    const { existsOrError, notExistsOrError } = app.api.utils.validation

    const save = async (req, res) => {
        const category = { ...req.body }
        if (req.params.id || req.params.id === 0) category._id = req.params.id

        try {
            existsOrError(category.name, 'Name not found')
            const categoryFromDB = await app.db.category.findOne({ name: category.name })

            if (!category._id || category._id === 0) {
                notExistsOrError(categoryFromDB, 'Category not found')
            } else {
                if (categoryFromDB && category._id != categoryFromDB._id) throw 'Category alredy registered'
            }
        } catch (msg) {
            return res.status(400).send(msg)
        }

        if (category._id || category._id === 0) {
            try {
                const updatedCategory = await app.db.category.findByIdAndUpdate(category._id, category)
                await updatedCategory.save()
                res.status(204).send()
            } catch (err) {
                console.log(err)
                res.status(500).send(err)
            }
        } else {
            const newCategory = new app.db.category(category)
            try {
                await newCategory.save()
                res.status(204).send()
            } catch (err) {
                res.status(500).send(err)
            }
        }
    }

    const get = async (req, res) => {
        const categories = await app.db.category.find({})
        try {
            res.json(categories)
        } catch (err) {
            res.status(500).send(err)
        }
    }

    const remove = async (req, res) => {
        try {
            const category = await app.db.category.findByIdAndDelete(req.params.id)
            if (!category) res.status(404).send("Category not found")
            res.status(200).send()
        } catch (err) {
            res.status(500).send(err)
        }
    }

    return { save, get, remove }
}