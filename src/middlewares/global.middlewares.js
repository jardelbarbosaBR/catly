import {findUser} from "../service/user.service.js";

const verifyUser = async (req, res, next) => {
    try {
        const {name, email, password} = req.body

        if (!name || !email) {
            return res.status(400).json({msn: "Nome e email são obrigatorios"})
        }
        if (!password) {
            return res.status(400).json({msn: "Senha e obrigatoria"})
        }

        const user = await findUser(email)

        if (user === null) {
            next()
        } else if (user.email === email) {
            return res.status(200).send({msn: "Esse email ja esta sendo utilizado"})
        }

    } catch (error) {
        console.log(error)
    }
}

export {
    verifyUser
}