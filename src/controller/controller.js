import {
  NewUrlSave,
  SearchUrl,
  UpdateView,
  UrlDelete,
} from "../service/service.js";

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
    const codeurl = generateCode();
    const shortenedURL = process.env.DOMAIN + codeurl;

    await NewUrlSave({
      url,
      codeurl,
      shortenedURL,
    });

    res.status(201).send({
      msng: "URL encurtada com sucesso",
      shortenedURL: `${shortenedURL}`,
    });
  } catch (error) {
    res.status(500).send({ msng: error.message });
  }
};

const redirection = async (req, res) => {
  try {
    const code = req.params.id;
    const redUrl = await SearchUrl(code);

    const view = redUrl.views;
    const viewAt = view + 1;

    await UpdateView(code, viewAt);

    res.redirect(301, `${redUrl.url}`);
  } catch (error) {
    res.status(500).send({ msng: error.message });
  }
};
("");
const statusUrl = async (req, res) => {
  try {
    const code = req.params.id;
    const status = await SearchUrl(code);

    res.status(200).send({
      shortenedURL: `${status.shortenedURL}`,
      views: `${status.views}`,
    });
  } catch (erro) {
    res.status(500).send({ msng: erro.message });
  }
};

const urlDelete = async (req, res) => {
  try {
    const code = req.body.code;
    await UrlDelete(code);
    res.status(200).send({ mensagem: "Url encurtada deletada com sucesso" });
  } catch (erro) {
    res.status(500).send({ msng: erro.message });
  }
};

export default { homePage, newUrl, redirection, statusUrl, urlDelete };
