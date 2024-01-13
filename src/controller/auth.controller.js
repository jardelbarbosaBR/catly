import bcrypt from 'bcrypt';
import {generateToken, loginFindService} from "../service/auth.service.js"

const login = async (req, res) =>{
    try {
        const {email, password} = req.body

        const use = await loginFindService(email)

        if(use === null){
            return res.status(401).send({msn: 'Email ou senha esta incorreda'});
        }

        const passwordIsValid = await bcrypt.compare(password, use.password)
        if(!passwordIsValid){
            return res.status(401).send({msn: 'Email ou senha esta incorreda'})
        }

        const token = await generateToken(use._id)
        return res.status(200).send({token: token})
    }catch (err){
        return res.status(500).send({msn: err.message})
    }
}

export {login}