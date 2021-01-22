import { Router } from 'express'

const routes = Router()

routes.get('/', () => {
  console.log('First route')
})

export default routes
