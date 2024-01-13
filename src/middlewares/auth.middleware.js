import jwt from 'jsonwebtoken'

const authorization = (req, res, next) => {
    try {
        const authorizationToken = req.headers['authorization']
        const tokenArray = authorizationToken.split(' ')
        const [Bearer, token] = tokenArray
        
        jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {
            if(err){
                return res.status(401).send({msn: "Não autorizado"})
            }
            if(decoded){
                req.userId = decoded._id
                next()
            }
        })

    } catch (error) {
        return res.status(500).send({erro: error.message})
    }
}

export { authorization } 