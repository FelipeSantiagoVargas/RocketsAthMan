import express from 'express'
import morgan from 'morgan'
import pkg from '../package.json'
import {createProofTypes, createRoles, createUnitMeasures} from './libs/initialSetup'
import playerRoutes from './routes/player.routes'
import authRoutes from './routes/auth.routes'
import userRoutes from './routes/user.routes'
import proofRoutes from './routes/proof.routes'
import playBookRoutes from './routes/playbook.routes'
import playRoutes from './routes/play.routes'
import statisticRoutes from './routes/statistic.routes'

const app = express()
const cors = require('cors');
createRoles();
createProofTypes();
createUnitMeasures();

app.set('pkg', pkg)

app.use(morgan('dev'))
app.use(express.json())
app.use(cors());

app.get('/',(req,res)=>{
    res.json({
        name: app.get('pkg').name,
        author: app.get('pkg').author,
        description: app.get('pkg').description,
        version: app.get('pkg').version
    })
})

app.use('/api/players',playerRoutes)
app.use('/api/auth',authRoutes)
app.use('/api/users',userRoutes)
app.use('/api/proofs',proofRoutes)
app.use('/api/playbook',playBookRoutes)
app.use('/api/play',playRoutes)
app.use('/api/statistic',statisticRoutes)

export default app;
