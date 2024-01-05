import { NewUrlSave } from "../service/service.js";

const homePage = (req, res) => {
  return res.send("Pagina inicial");
};

const newUrl = async (req, res) => {
  try {
    function generateCode() {
      let text = "";
      const possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (let i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      return text;
    }

    const url = req.body.url;
    const code = generateCode();
    const shortenedURL = process.env.DOMAIN + code;

    await NewUrlSave({
      url,
      code,
      shortenedURL,
    });

    res.status(201).send({ msng: "URL encurtada com sucesso" });
  } catch (error) {
    res.status(500).send({ msng: error.message });
  }
};

export default { homePage, newUrl };
