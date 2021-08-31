import {Router} from 'express'
const router = Router()

import * as authCtrl from '../controllers/auth.controller'
import {verifySignup} from '../middlewares/index'

router.post('/signup', [verifySignup.checkRolesExisted, verifySignup.checkDuplicateUsernameOrEmail], authCtrl.signUp)

router.post('/signin', authCtrl.signIn)


export default router;