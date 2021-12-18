const bcrypt = require('bcryptjs')

module.exports = app => {
    const { existsOrError, equalsOrError, validateEmail, validatePassword } = app.api.utils.validation

    const encryptPassword = password => {
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(password, salt)
    }

    const save = async (req, res) => {
        const user = { ...req.body }
        let updatePassword = false
        if (req.params.id) user.id = req.params.id

        if (!req.originalUrl.startsWith('/users')) user.admin = 0
        if (!req.user || (req.user.admin !== 1)) user.admin = 0

        try {
            existsOrError(user.name, 'Nome não informado')
            existsOrError(user.email, 'E-mail não informado')
            if (!user.id || (user.password || user.confirmPassword)) {
                existsOrError(user.password, 'Senha não informada')
                existsOrError(user.confirmPassword, 'Confirmação de senha inválida')
                equalsOrError(user.password, user.confirmPassword, 'Senhas não conferem')
                validatePassword(user.password, 'Senha precisa ter: uma letra maiúscula, uma letra minúscula, um número e tamanho entre 6-20.')
                updatePassword = true
            }
            validateEmail(user.email, 'O e-mail informado é inválido')
            const usersFromDB = await app.db('user')
                .where({ email: user.email })
                .orWhere({ name: user.name })
                .select('*')
            if (!user.id) {
                if(usersFromDB && usersFromDB.length > 0) throw 'Usuário já cadastrado'
            } else {
                if(usersFromDB  && usersFromDB.length > 0){
                    usersFromDB.forEach(u => {
                        if (user.id != u.id) throw 'Usuário já cadastrado'
                    })
                }
            }
        } catch (msg) {
            return res.status(400).send(msg)
        }

        delete user.confirmPassword
        if (!updatePassword) delete user.password
        else user.password = encryptPassword(user.password)

        if (user.id) {
            app.db('user')
                .update(user)
                .where({ id: user.id })
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))

        } else {
            app.db('user')
                .insert(user)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }

    const get = (req, res) => {
        app.db('user')
            .select('id', 'name', 'email', 'admin')
            .whereNot({email: 'admin@admin.com'})
            .then(users => res.json(users))
            .catch(err => res.status(500).send(err))
    }

    const remove = async (req, res) => {
        try {
            const rowsDeleted = await app.db('user')
                .where({ id: req.params.id }).del()

            try {
                existsOrError(rowsDeleted, 'Usuário não foi encontrado.')
            } catch (msg) {
                return res.status(400).send(msg)
            }

            res.status(204).send()
        } catch (msg) {
            res.status(500).send(msg)
        }
    }

    return { save, get, remove }
}