import {Router} from 'express'
const router = Router()

import * as playersCtrl from '../controllers/player.controller'
import {authJwt} from '../middlewares/index'

router.get('/', playersCtrl.getPlayers)
router.post('/', [authJwt.verifyToken , authJwt.isModerator] , playersCtrl.createPlayer)
router.get('/:playerId', playersCtrl.getPlayerById)
router.put('/:playerId', [authJwt.verifyToken , authJwt.isAdmin], playersCtrl.updatePlayerById)
router.delete('/:playerId', [authJwt.verifyToken , authJwt.isAdmin], playersCtrl.deletePlayerById)

export default router;