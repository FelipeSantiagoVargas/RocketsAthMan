import Proof from '../models/Proof'
import ProofTypes from '../models/ProofTypes';
import UnitMesuare from '../models/UnitMesuare';
import Player from '../models/Player';

export const createProof = async (req, res) => {
    const { name, unitMeasure, proofType, description, rateMale, rateFemale} = req.body;

    const newProof = Proof(
        {
            name: name,
            description: description,
            rateMale: rateMale,
            rateFemale: rateFemale,
        }
    )

    if (unitMeasure) {
        newProof.unitMeasure = await verifyUnitMeasure(unitMeasure)
    } else {
        const unitMeasure = await UnitMesuare.find({ name: "other" })
        newProof.unitMeasure = [unitMeasure[0]._id];
    }

    if (proofType) {
        newProof.proofType = await verifyProofType(proofType)
    } else {
        const proofType = await ProofTypes.find({ name: "other" })
        newProof.proofType = [proofType[0]._id];
    }

    console.log(newProof)

    const savedProof = await newProof.save()

    res.json(savedProof)
}

export const getProofs = async (req, res) => {
    res.status(200).json(await populateProof(await Proof.find()));
}

export const getProofById = async (req, res) => {
    console.log(req.params)
    res.status(200).json(await populateProof(await Proof.findById(req.params.proofId)));

}

export const updateProofById = async (req, res) => {
    const {unitMeasure, proofType,} = req.body;
    if (unitMeasure) {
        req.body.unitMeasure = await verifyUnitMeasure(unitMeasure)
    } 

    if (proofType) {
        req.body.proofType = await verifyProofType(proofType)
    } 

    const updateProof = await Proof.findByIdAndUpdate(req.params.proofId, req.body,
        { new: true }
    );

    res.status(200).json(await populateProof(updateProof))
}

export const deleteProofById = async (req, res) => {
    const { proofId } = req.params;
    const del = await Proof.findByIdAndDelete(proofId)
    res.status(200).json(del?'Proof Eliminated':'Proof doesnt exist')
}

export const addProofResult = async (req, res) => {
    const proof = await Proof.findById(req.params.proofId)
    if(proof){
        const proofArray = Array.from(proof.listPlayers)
        const exist = proofArray.find(e => e.playerId == req.body.playerId)
        if(exist){
            return res.status(200).json({message:'This player already has a result in this proof'})
        }
        proofArray.push(req.body)
        const updateProof = await Proof.findByIdAndUpdate(req.params.proofId, {listPlayers:proofArray},
            { new: true }
        );
        res.status(200).json(await populateProof(updateProof))
    }else{
        return res.json({message: 'Proof doesnt exist'})
    }

}

export const editProofResult = async (req, res) => {
    const proof = await Proof.findById(req.params.proofId)
    if(proof){
        const proofArray = Array.from(proof.listPlayers)
        const edit = proofArray.find(e => e.playerId == req.body.playerId)
        if(edit){
            edit.result = req.body.result
            const updateProof = await Proof.findByIdAndUpdate(req.params.proofId, {listPlayers:proofArray},
                { new: true }
            );
            return res.status(200).json(await populateProof(updateProof))
        }
    }else{
        return res.json({message: 'The result doesnt have edit'})
    }

}

export const deleteProofResult = async (req, res) => {
    const proof = await Proof.findById(req.params.proofId)
    if(proof){
        const proofArray = Array.from(proof.listPlayers)
        const edit = proofArray.filter((e) => {
           if(e.playerId != req.body.playerId){
                return e
            }
        })
        console.log(edit)
        if(edit){
            const updateProof = await Proof.findByIdAndUpdate(req.params.proofId, {listPlayers:edit},
                { new: true }
            );
            return res.status(200).json(await populateProof(updateProof))
        }
    }else{
        return res.json({message: 'The result doesnt exist'})
    }

}

const populateProof = async (proof) => {
    const unitMeasure = await UnitMesuare.populate(proof, {path:'unitMeasure'})
    const proofTypes = await ProofTypes.populate(unitMeasure, {path:'proofType'})
    const player = await Player.populate(proofTypes, {path:'listPlayers.playerId'})
    return player?player:'Proof doesnt exist'
}

const verifyProofType = async (proofType) =>{
    const foundproofType = await ProofTypes.find({ name: { $in: proofType } })
    return foundproofType.map(proofType => proofType._id)
}

const verifyUnitMeasure = async (unitMeasure) =>{
    const foundUnitMeasure = await UnitMesuare.find({ name: { $in: unitMeasure } })
    return foundUnitMeasure.map(unitMeasure => unitMeasure._id)
}