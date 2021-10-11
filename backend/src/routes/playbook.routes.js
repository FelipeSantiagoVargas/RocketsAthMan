import {Router} from 'express'
const router = Router()

import * as playBookCtrl from '../controllers/playbook.controller'
import {authJwt} from '../middlewares/index'

router.get('/', [authJwt.verifyToken], playBookCtrl.getPlayBooks)
router.post('/', [authJwt.verifyToken , authJwt.isModerator] , playBookCtrl.createPlayBook)
router.get('/:playBookId', [authJwt.verifyToken], playBookCtrl.getPlayBookById)
router.put('/:playBookId', [authJwt.verifyToken , authJwt.isAdmin], playBookCtrl.updatePlayerById)
router.delete('/:playBookId', [authJwt.verifyToken , authJwt.isAdmin], playBookCtrl.deletePlayBookById)
router.put('/addPlay/:playBookId', [authJwt.verifyToken , authJwt.isAdmin], playBookCtrl.addPlay)

export default router;