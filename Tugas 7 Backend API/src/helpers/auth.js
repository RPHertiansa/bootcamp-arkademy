const auth = (req, res, next) => {
    const token = req.headers.token
    if(token === "123"){
        next()
    } else {
        res.json({
            msg: 'Authentication Failed'
        })
    }
}

module.exports = auth