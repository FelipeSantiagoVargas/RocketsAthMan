import {Router} from 'express'
const router = Router()

import * as proofsCtrl from '../controllers/proof.controller'
import {authJwt} from '../middlewares/index'

router.get('/', [authJwt.verifyToken , authJwt.isModerator], proofsCtrl.getProofs)
router.post('/', [authJwt.verifyToken , authJwt.isModerator] , proofsCtrl.createProof)
router.get('/:proofId', [authJwt.verifyToken , authJwt.isModerator], proofsCtrl.getProofById)
router.put('/:proofId', [authJwt.verifyToken , authJwt.isAdmin], proofsCtrl.updateProofById)
router.delete('/:proofId', [authJwt.verifyToken , authJwt.isAdmin], proofsCtrl.deleteProofById)
router.put('/addResult/:proofId', [authJwt.verifyToken , authJwt.isAdmin], proofsCtrl.addProofResult)
router.put('/editResult/:proofId', [authJwt.verifyToken , authJwt.isAdmin], proofsCtrl.editProofResult)
router.delete('/deleteResult/:proofId', [authJwt.verifyToken , authJwt.isAdmin], proofsCtrl.deleteProofResult)

export default router;