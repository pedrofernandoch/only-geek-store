module.exports = app => {
    const { existsOrError, notExistsOrError } = app.api.utils.validation

    const save = async (req, res) => {
        const status = { ...req.body }
        if (req.params.id) status.id = req.params.id

        try {
            existsOrError(status.name, 'Name not found')
            const statusFromDB = await app.db('status')
                .where('status.name', '=', status.name).first('*')
            if (!status.id) {
                notExistsOrError(statusFromDB, 'Status not found')
            } else {
                if (statusFromDB && status.id != statusFromDB.id) throw 'Status alredy registered'
            }
        } catch (msg) {
            return res.status(400).send(msg)
        }

        if (status.id) {
            app.db('status')
                .update(status)
                .where('status.id', '=', status.id)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))

        } else {
            app.db('status')
                .insert(status)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }

        const newSubCategory = new app.db.subCategory(request.body);

        try {
            await newSubCategory.save();
            response.send(newSubCategory);
        } catch (error) {
            response.status(500).send(error);
        }

        try {
            await app.db.subCategory.findByIdAndUpdate(request.params.id, request.body);
            await app.db.subCategory.save();
            response.send(newSubCategory);
        } catch (error) {
            response.status(500).send(error);
        }
    }

    const get = (req, res) => {
        app.db('status')
            .select('*')
            .then(status => res.json(status))
            .catch(err => res.status(500).send(err))

        const findSubCategory = await app.db.subCategory.find({});

        try {
            response.send(findSubCategory);
        } catch (error) {
            response.status(500).send(error);
        }
    }

    const remove = async (req, res) => {
        try {
            const rowsDeleted = await app.db.subCategory('status')
                .where('status.id', '=', req.params.id).del()

            try {
                existsOrError(rowsDeleted, 'Status not found')
            } catch (msg) {
                return res.status(400).send(msg)
            }

            res.status(204).send()
        } catch (msg) {
            res.status(500).send(msg)
        }


        try {
            const newSubCategory = await app.db.subCategory.findByIdAndDelete(request.params.id);

            if (!newSubCategory) response.status(404).send("No item found");
            response.status(200).send();
        } catch (error) {
            response.status(500).send(error);
        }
    }

    return { save, get, remove }
}