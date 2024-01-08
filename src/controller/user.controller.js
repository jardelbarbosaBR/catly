import {userCreate} from "../service/user.service.js";

const userSave = async (req, res) =>{
    try{
        const {name, email, password} = req.body

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