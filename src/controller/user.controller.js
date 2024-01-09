import {findUser, UserCreate} from "../service/user.service.js";

const userSave = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    await UserCreate({
      name: name,
      email: email,
      password: password,
    });
    res.status(201).send({ mensagem: "Usuario criado com sucesso" });
  } catch (error) {
    res.send({ msn: error.mensagem });
  }
};

const findUserController = async (req, res) =>{
  try{
    const { email } = req.body

    if(!email){
      res.status(400).send({mensagem: "Email invalido"})
    }

    const user = await findUser(email)

    res.status(200).send({
      username: user.name,
      email: user.email
    })

  } catch (error){
    res.send({ msn: error.mensagem });
  }
}

export { userSave, findUserController};
