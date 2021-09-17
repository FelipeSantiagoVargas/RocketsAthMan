import {Router} from 'express'
const router = Router()

import * as userCtrl from '../controllers/user.controller'
import {authJwt, mails, verifySignup} from '../middlewares/index'

router.post('/', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExisted] ,userCtrl.createUser)
router.post('/recoverPassword', mails.recoverPasswordMail)
router.get('/', [authJwt.verifyToken, authJwt.isAdmin], userCtrl.getUsers)
router.get('/:userId', [authJwt.verifyToken] , userCtrl.getUserById)
router.get('/player/:userId', [authJwt.verifyToken], userCtrl.getPlayerByUserId)

export default router;