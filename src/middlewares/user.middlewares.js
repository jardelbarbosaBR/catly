const validUser = (req, res, next)=>{
    try{
        const {name, email, password} = req.body

        if (!name || !email){
            res.send({msn: "O nome do usuario e email são obrigatorio "})
        }

        if(!password){
            res.send({msn: "Senha e obrigatorio"})
        }
        next()
    } catch(error){
        res.send({msn: error.mensagem})
    }
}

export {validUser}