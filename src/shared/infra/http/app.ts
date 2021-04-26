import 'reflect-metadata'
import 'dotenv/config'
import 'express-async-errors'

import cors from 'cors'
import express, { Request, Response, NextFunction } from 'express'
import swaggerUI from 'swagger-ui-express'

import upload from '@config/upload'
import '@shared/container'
import { AppError } from '@shared/errors/AppError'
import createConnection from '@shared/infra/typeorm'

import routes from './routes'
import swaggerDocument from './swagger.json'

createConnection()

const app = express()
app.use(express.json())

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))

app.use('/avatar', express.static(`${upload.tmpFolder}/avatar`))

app.use(cors())

app.use(routes)

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      message: err.message
    })
  }

  return response.status(500).json({
    status: 'error',
    message: `Internal server error - ${err.message}`
  })
})
export { app }
