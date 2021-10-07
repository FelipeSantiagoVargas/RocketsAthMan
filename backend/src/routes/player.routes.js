import {Router} from 'express'
const router = Router()

import * as playersCtrl from '../controllers/player.controller'
import {authJwt, verifySignup,mails} from '../middlewares/index'

router.get('/', [authJwt.verifyToken],playersCtrl.getPlayers)
router.post('/', [authJwt.verifyToken , authJwt.isModerator, verifySignup.checkDuplicateUsernameOrEmail, verifySignup.checkDuplicateDocumentId] , playersCtrl.createPlayer, mails.sendCredentialsMail)
router.get('/:playerId', [authJwt.verifyToken],playersCtrl.getPlayerById)
router.put('/:playerId', [authJwt.verifyToken , authJwt.isAdmin], playersCtrl.updatePlayerById)
router.delete('/:playerId', [authJwt.verifyToken , authJwt.isAdmin], playersCtrl.deletePlayerById)

export default router;