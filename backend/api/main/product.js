module.exports = app => {
    const { existsOrError, notExistsOrError } = app.api.utils.validation

    const save = async (req, res) => {
        const status = { ...req.body }
        if (req.params.id) status.id = req.params.id

        try {
            existsOrError(status.name, 'Nome não informado')
            const statusFromDB = await app.db('status')
                .where('status.name', '=', status.name).first('*')
            if (!status.id) {
                notExistsOrError(statusFromDB, 'Status já cadastrado')
            } else {
                if (statusFromDB && status.id != statusFromDB.id) throw 'Status já cadastrado'
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

        const food = new app.db.product(request.body);

        app.db.product.save()

        try {
            await food.save();
            response.send(food);
        } catch (error) {
            response.status(500).send(error);
        }

        try {
            await foodModel.findByIdAndUpdate(request.params.id, request.body);
            await foodModel.save();
            response.send(food);
        } catch (error) {
            response.status(500).send(error);
        }
    }

    const get = (req, res) => {
        app.db('status')
            .select('*')
            .then(status => res.json(status))
            .catch(err => res.status(500).send(err))

        const foods = await foodModel.find({});

        try {
            response.send(foods);
        } catch (error) {
            response.status(500).send(error);
        }
    }

    const remove = async (req, res) => {
        try {
            const rowsDeleted = await app.db('status')
                .where('status.id', '=', req.params.id).del()

            try {
                existsOrError(rowsDeleted, 'Status não encontrado')
            } catch (msg) {
                return res.status(400).send(msg)
            }

            res.status(204).send()
        } catch (msg) {
            res.status(500).send(msg)
        }


        try {
            const food = await foodModel.findByIdAndDelete(request.params.id);

            if (!food) response.status(404).send("No item found");
            response.status(200).send();
        } catch (error) {
            response.status(500).send(error);
        }
    }

    return { save, get, remove }
}