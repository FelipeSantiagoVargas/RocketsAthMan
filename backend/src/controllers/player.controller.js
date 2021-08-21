import Player from '../models/Player'
import User from '../models/User'
import Role from '../models/Role'


export const createPlayer = async (req,res)=>{
    const {username, email, password, roles} = req.body;

    const newUser = new User(
        {
            username,
            email,
            password: await User.encryptPassword(password)
        }
    )

    if (roles) {
       const foundRoles = await Role.find({name: {$in:roles}})
       newUser.roles = foundRoles.map(role=>role._id)
    }else{
        const role = await Role.find({name:"user"})
        newUser.roles = [role[0]._id];
    }

    const savedUser = await newUser.save();
    const user = savedUser._id

    const {imgUrl,name,lastName,gender,birthday,documentId,phone,address,position,height,weight,eps} = req.body;

    const newPlayer = new Player({imgUrl,name,lastName,gender,birthday,documentId,phone,address,position,height,weight,eps,user})

    const playerSaved = await newPlayer.save()

    res.status(201).json(playerSaved)
}

export const getPlayers= async (req,res)=>{
    const players = await Player.find();
    res.json(players)
}

export const getPlayerById = async (req,res)=>{
    const players = await Player.findById(req.params.playerId);
    res.status(200).json(players)
}

export const updatePlayerById = async (req,res)=>{
    const updatePlayer = await Player.findByIdAndUpdate(req.params.playerId,req.body,
        {new:true}
        );

    res.status(200).json(updatePlayer)
}

export const deletePlayerById = async (req,res)=>{
    const {playerId} = req.params;
    await Player.findByIdAndDelete(playerId)
    res.status(204).json()
}