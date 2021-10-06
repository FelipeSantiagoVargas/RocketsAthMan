import {Router} from 'express'
const router = Router()

import * as statisticsCtrl from '../controllers/statistics.controller'
import {authJwt} from '../middlewares/index'

router.get('/category', [authJwt.verifyToken , authJwt.isAdmin], statisticsCtrl.getStatisticsByCategory)
router.get('/category/proof/:typeProof', [authJwt.verifyToken , authJwt.isAdmin], statisticsCtrl.getStatisticsByProof)

export default router;