import express from 'express'
import { OrderController } from './orders.controller'

const router = express.Router()

router.post('/create-order', OrderController.createOrderController)

export const OrderRouter = router
