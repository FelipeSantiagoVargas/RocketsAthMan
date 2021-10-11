import {Router} from 'express'
const router = Router()

import * as playCtrl from '../controllers/play.controller'
import {authJwt} from '../middlewares/index'

router.get('/', [authJwt.verifyToken], playCtrl.getPlays)
router.get('/:playId', [authJwt.verifyToken], playCtrl.getPlayById)
router.put('/:playId', [authJwt.verifyToken , authJwt.isAdmin], playCtrl.updatePlayById)
router.delete('/:playId', [authJwt.verifyToken , authJwt.isAdmin], playCtrl.deletePlayById)

export default router;