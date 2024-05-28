import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { ProducutsRoute } from './modules/products/products.router'
import { OrderRouter } from './modules/orders/orders.route'
const app: Application = express()

//parser
app.use(express.json())
app.use(cors())

app.use('/api/products', ProducutsRoute)
app.use('/api/orders', OrderRouter)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

export default app
