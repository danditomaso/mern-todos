import { Router } from 'express'

// Import all the routes
import { todoRouter } from './todos'

const apiRouter = Router()
  .use('/todos', todoRouter)
//.use('/anotherpath', another_router) 

export { apiRouter }