import mongoose from "mongoose";


const DbConection = () => {
  mongoose
    .connect(process.env.DB_CONECTION)
    .then(() => {
      console.log("Servidor MongoDB Atlas conectado");
    })
    .catch((erro) => {
      console.log("Error ao conectar ao MongoDb Atlas: " + erro.message);
    });
};

export default DbConection;
