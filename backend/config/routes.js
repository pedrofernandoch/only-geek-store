const admin = require('./admin.js')

module.exports = app => {
    app.post('/signin', app.api.safety.auth.signin)
    app.post('/validateToken', app.api.safety.auth.validateToken)

    app.route('/users')
        .all(app.config.passport.authenticate())
        .post(admin(app.api.safety.user.save))
        .get(app.api.safety.user.get)

    app.route('/users/:id')
        .all(app.config.passport.authenticate())
        .put(admin(app.api.safety.user.save))
        .delete(admin(app.api.safety.user.remove))
}