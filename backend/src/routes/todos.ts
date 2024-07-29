
import express from 'express'


export const todoRouter = express.Router()

todoRouter.get('/all', (req, res) => {
  res.send('get todos')
})

todoRouter.get("/one/:id", (req, res) => {
  res.send(`get todo by id ${req.params.id}`);
})

