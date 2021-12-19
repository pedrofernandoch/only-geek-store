module.exports = app => {
    const { existsOrError, notExistsOrError } = app.api.utils.validation

    const save = async (req, res) => {
        const subCategory = { ...req.body }
        if (req.params.id || req.params.id === 0) subCategory._id = req.params.id
        try {
            existsOrError(subCategory.name, 'Name not found')
            const subCategoryFromDB = await app.db.subCategory.findOne({ name: subCategory.name })
            if (!subCategory._id || subCategory._id === 0) {
                notExistsOrError(subCategoryFromDB, 'Subcategory not found')
            } else {
                if (subCategoryFromDB && subCategory._id != subCategoryFromDB._id) throw 'Subcategory alredy registered'
            }
        } catch (msg) {
            return res.status(400).send(msg)
        }

        if (subCategory._id || subCategory._id === 0) {
            try {
                const updatedSubCategory = await app.db.subCategory.findByIdAndUpdate(subCategory._id, subCategory)
                await updatedSubCategory.save()
                res.status(204).send()
            } catch (err) {
                res.status(500).send(err)
            }
        } else {
            const newSubCategory = new app.db.subCategory(subCategory)
            try {
                await newSubCategory.save()
                res.status(204).send()
            } catch (err) {
                res.status(500).send(err)
            }
        }
    }

    const get = async (req, res) => {
        const subCategories = await app.db.subCategory.find({})
        try {
            res.json(subCategories)
        } catch (err) {
            res.status(500).send(err)
        }
    }

    const remove = async (req, res) => {
        try {
            const subCategory = await app.db.subCategory.findByIdAndDelete(req.params.id)
            if (!subCategory) res.status(404).send("Subcategory not found")
            res.status(200).send()
        } catch (err) {
            res.status(500).send(err)
        }
    }

    return { save, get, remove }
}