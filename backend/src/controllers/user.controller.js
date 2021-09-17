import Player from "../models/Player";
import User from "../models/User";

export const createUser = (req, res) => {
    res.status(200).json('In Progess')
}

export const getUsers = async (req, res) => {
    const users = await User.find();
    res.status(200).json(users)
}

export const getUserById = async (req, res) => {
    const user = await User.findById(req.params.userId);
    const roles = await User.populate(user, {path:'roles'})
    res.status(200).json(roles)
}

export const getPlayerByUserId = async (req, res) => {
    const player = await Player.findOne({user:req.params.userId});
    res.status(200).json(player)
}