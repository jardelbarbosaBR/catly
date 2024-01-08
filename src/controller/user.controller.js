import {userCreate} from "../service/user.service.js";

async function userSave(req, res){
    try{
        const {name, email, password} = req.body

        if (!name || !email){
            res.send({msn: "O nome do usuario e email são obrigatorio "})
        }

        if(!password){
            res.send({msn: "Senha e obrigatorio"})
        }
        await userCreate({
            name: name,
            email: email,
            password: password
        })
        res.status(201).send({mensagem: "Usuario criado com sucesso"})
    }  catch(error){
        res.send({msn: error.mensagem})
    }
}

export {userSave}