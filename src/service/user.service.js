import User from '../models/user.models.js'

const userCreate = async (body) => await User.create(body);


export {userCreate}