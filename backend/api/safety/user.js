const bcrypt = require('bcryptjs')

module.exports = app => {
    const { notExistsOrError, existsOrError, equalsOrError, validateEmail, validatePassword } = app.api.utils.validation

    const encryptPassword = password => {
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(password, salt)
    }

    const save = async (req, res) => {
        const user = { ...req.body }
        let updatePassword = false
        if (req.params.id) user._id = req.params.id
        if (!req.originalUrl.startsWith('/users')) user.admin = false
        if (!req.user || (req.user.admin !== 1)) user.admin = false
        try {
            existsOrError(user.name, 'Name not found')
            existsOrError(user.email, 'E-mail not found')
            if (!user._id || (user.password || user.confirmPassword)) {
                existsOrError(user.password, 'Password not found')
                existsOrError(user.confirmPassword, 'ConfirmPassword not found')
                equalsOrError(user.password, user.confirmPassword, 'Passwords must be equals')
                validatePassword(user.password, 'Password must have: uper case letter, lower case letter, a number and 6-20 size.')
                updatePassword = true
            }
            validateEmail(user.email, 'Invalid email')
            const userFromDB = await app.db.user.findOne({ email: user.email })

            if (!user._id || user._id === 0) {
                notExistsOrError(userFromDB, 'User not found')
            } else {
                if (userFromDB && user._id != userFromDB._id) throw 'User alredy registered'
            }
        } catch (msg) {
            return res.status(400).send(msg)
        }

        delete user.confirmPassword
        if (!updatePassword) delete user.password
        else user.password = encryptPassword(user.password)

        if (user._id || user._id === 0) {
            try {
                const updatedUser = await app.db.user.findByIdAndUpdate(user._id, user)
                await updatedUser.save()
                res.status(204).send()
            } catch (err) {
                res.status(500).send(err)
            }
        } else {
            user.register_date = new Date()
            const newUser = new app.db.user(user)
            try {
                await newUser.save()
                res.status(204).send()
            } catch (err) {
                res.status(500).send(err)
            }
        }
    }

    const get = async (req, res) => {
        const users = await app.db.user.find({})
        try {
            res.json(users)
        } catch (err) {
            res.status(500).send(err)
        }
    }

    const remove = async (req, res) => {
        try {
            const user = await app.db.user.findByIdAndDelete(req.params.id)
            if (!user) res.status(404).send("User not found")
            res.status(200).send()
        } catch (err) {
            res.status(500).send(err)
        }
    }

    return { save, get, remove }
}