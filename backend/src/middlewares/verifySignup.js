import {ROLES} from "../models/Role"
import User from "../models/User"
import Player from "../models/Player"

export const checkDuplicateUsernameOrEmail = async (req,res,next) =>{
    const user = await User.findOne({username: req.body.username})

    if (user) return res.status(400).json({message:'The user already exists'})
    

    const email = await User.findOne({email: req.body.email})

    if (email) return res.status(400).json({message:'The email already exists'})

    next();
}

export const checkRolesExisted = (req,res,next) =>{
    if (req.body.roles) {
        for (let i = 0; i < req.body.roles.length; i++) {
            if(!ROLES.includes(req.body.roles[i])){
                return res.status(400).json({
                    message: `Role ${req.body.roles[i]} does not exists`
                })
            }
        }
    }

    next()
}

export const checkDuplicateDocumentId = async (req,res,next) =>{
    const player = await Player.findOne({documentId: req.body.documentId})

    if (player) return res.status(400).json({message:'The document already exists'})
    
    next();
}

