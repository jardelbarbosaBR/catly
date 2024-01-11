
///// IMPORTS SERVICE ///////
import {
  findUser,
  UserCreate,
  findAll,
  deleteOneUser,
} from "../service/user.service.js";

////////////////////////////////////////////////////////////////////////
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

////////////////////////////////////////////////////////////////////////
const findUserOne = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).send({ mensagem: "Email invalido" });
    }

    const user = await findUser(email);

    if (user === null) {
      return res.status(404).send({ mensagem: "Usuario não existe" });
    }

    return res.status(200).send({
      username: user.name,
      email: user.email,
    });
  } catch (error) {
    return res.send({ msn: error.mensagem });
  }
};

////////////////////////////////////////////////////////////////////////
const findUserAll = async (req, res) => {
  try {
    const userAll = await findAll();
    return res.status(200).send(userAll);
  } catch (error) {
    return res.send({ msn: error.mensagem });
  }
};

const deleteUser = async (req, res) => {
  try {
    const user_email = req.body.email;

    const user_delete = await deleteOneUser(user_email);

    if (user_delete === null) {
      return res.status(404).send({ msn: "Esse usuario não existe" });
    }

    return res.status(200).send({ msn: "Usuario excluido com sucesso" });
  } catch (error) {
    res.send({ msn: error.mensagem });
  }
};


///// EXPORTS ///////
export { userSave, findUserOne, findUserAll, deleteUser };
