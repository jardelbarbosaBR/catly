import bcrypt from "bcrypt";
import { generateToken, loginFindService } from "../service/auth.service.js";

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const use = await loginFindService(email);

    if (use === null) {
      return res.status(401).json({ msn: "Email ou senha esta incorreda" });
    }

    const passwordIsValid = await bcrypt.compare(password, use.password);
    if (!passwordIsValid) {
      return res.status(401).json({ msn: "Email ou senha esta incorreda" });
    }

    const token = await generateToken(use._id);
    return res.status(200).json({ token: token });
  } catch (err) {
    return res.status(500).send({ msn: err.message });
  }
};

const authorization = (req, res) => {
  try {
    const authorizationToken = req.headers["authorization"];
    const tokenArray = authorizationToken.split(" ");
    const [Bearer, token] = tokenArray;

    jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {
      if (err) {
        return res.status(401).send({ msn: "Não autorizado" });
      }
      if (decoded) {
        return res.status(200).send({ msn: "autorizado" });
      }
    });
  } catch (error) {
    return res.status(500).send({ erro: error.message });
  }
};

export { login, authorization };
