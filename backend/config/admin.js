module.exports = middleware => {
    return (req, res, next) => {
        if(req.user.admin === 0) {
            res.status(401).send('Usuário não é administrador.')
        } else {
            middleware(req, res, next)
        }
    }
}