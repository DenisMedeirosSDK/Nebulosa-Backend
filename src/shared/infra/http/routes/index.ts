import { Router } from 'express'

const routes = Router()

routes.use('', () => { console.log('Routes') })

export default routes
