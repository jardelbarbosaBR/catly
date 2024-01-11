import bcrypt from 'bcrypt';
import { loginService } from "../service/auth.service.js"

const login = async (req, res) =>{
    try {
        const {email, password} = req.body

        const use = await loginService(email)

        if(use === null){
            return res.status(401).send({msn: 'Email ou senha esta incorreda'})
        }

        const passwordIsValid = await bcrypt.compare(password, use.password)
        if(!passwordIsValid){
            return res.status(401).send({msn: 'Email ou senha esta incorreda'})
        }
        return res.status(200).send({msn: 'Login com sucesso'})
    }catch (err){
        return res.status(500).send({msn: err.message})
    }
}

export {login}