import Player from '../models/Player'


export const createPlayer = async (req,res)=>{
    console.log(req.body)

    const {imgUrl,name,lastName,gender,birthday,documentId,phone,address,position,height,weight,eps,user} = req.body;

    const newPlayer = new Player({imgUrl,name,lastName,gender,birthday,documentId,phone,address,position,height,weight,eps})

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