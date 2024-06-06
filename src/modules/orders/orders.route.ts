import express from 'express'
import { OrderController } from './orders.controller'

const router = express.Router()

router.post('/', OrderController.createOrderController)
router.get('/', OrderController.gettingDataFromDbController)
export const OrderRouter = router
