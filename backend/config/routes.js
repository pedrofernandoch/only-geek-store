module.exports = app => {

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

    app.route('/users')
        .post(app.api.safety.user.save)
        .get(app.api.safety.user.get)

    app.route('/users/:id')
        .put(app.api.safety.user.save)
        .delete(app.api.safety.user.remove)

    // app.route('/orders')
    //     .post(app.api.auxiliary.order.save)
    //     .get(app.api.auxiliary.order.get)

    // app.route('/orders/:id')
    //     .put(app.api.auxiliary.order.save)
    //     .delete(app.api.auxiliary.order.remove)
}