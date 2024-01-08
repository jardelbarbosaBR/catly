import {userCreate} from "../service/user.service.js";

async function userSave(req, res){
    try{
        const {username, email, password} = req.body

        if (!username && !email){
            res.send({msn: "O nome de usuario e email são obrigatorio "})
        }

        if(!password){
            res.send({msn: "Senha e obrigatorio"})
        }
        await userCreate({
            username: username,
            email: email,
            password: password
        })
    }  catch(error){
        res.send({msn: error.mensagem})
    }
}

export {userSave}