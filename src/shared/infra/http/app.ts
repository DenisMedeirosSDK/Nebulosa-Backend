import 'reflect-metadata'
import cors from 'cors'
import express from 'express'

import createConnection from '@shared/infra/typeorm'

import '@shared/container'
import routes from './routes'

createConnection()

const app = express()
app.use(express.json())

app.use(cors())

app.use(routes)

export { app }
