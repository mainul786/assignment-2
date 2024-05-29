import express from 'express'
import { OrderController } from './orders.controller'

const router = express.Router()

router.post('/create-order', OrderController.createOrderController)
router.get('/', OrderController.gettingDataFromDbController)
export const OrderRouter = router
