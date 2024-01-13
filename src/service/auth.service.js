import User from "../models/user.models.js";
import jwt from "jsonwebtoken"

const loginFindService = async (id) => await User.findOne({email: id}).select('+password')
const generateToken = async (id) => {
    return await jwt.sign({_id: id}, process.env.SECRET_KEY,{expiresIn: "24h"})
}


export { loginFindService, generateToken }