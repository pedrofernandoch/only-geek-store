const admin = require('./admin.js')

module.exports = app => {
    // app.post('/signin', app.api.safety.auth.signin)
    // app.post('/signup', app.api.safety.auth.signup)
    // app.post('/validateToken', app.api.safety.auth.validateToken)

    app.route('/categories')
        .post(app.api.auxiliary.category.save)
        .get(app.api.auxiliary.category.get)

    app.route('/categories/:id')
        .put(app.api.auxiliary.category.save)
        .delete(app.api.auxiliary.category.remove)

    app.route('/subcategories')
        .post(app.api.auxiliary.subCategory.save)
        .get(app.api.auxiliary.subCategory.get)

    app.route('/subcategories/:id')
        .put(app.api.auxiliary.subCategory.save)
        .delete(app.api.auxiliary.subCategory.remove)

    app.route('/products')
        .post(app.api.main.product.save)
        .get(app.api.main.product.get)

    app.route('/products/:id')
        .put(app.api.main.product.save)
        .delete(app.api.main.product.remove)

    // app.route('/orders')
    //     .post(app.api.auxiliary.order.save)
    //     .get(app.api.auxiliary.order.get)

    // app.route('/orders/:id')
    //     .put(app.api.auxiliary.order.save)
    //     .delete(app.api.auxiliary.order.remove)

    app.route('/users')
        // .all(app.config.passport.authenticate())
        .post(/*admin(*/app.api.safety.user.save)//)
        .get(app.api.safety.user.get)

    app.route('/users/:id')
        // .all(app.config.passport.authenticate())
        .put(/*admin(*/app.api.safety.user.save)//)
        .delete(/*admin(*/app.api.safety.user.remove)//)
}