import { Request, Response } from 'express'
import { OrderService } from './orders.service'

const createOrderController = async (req: Request, res: Response) => {
  const order = req.body
  const result = await OrderService.createOrder(order)
  res.status(200).json({
    success: true,
    message: 'Order created successfully',
    data: result,
  })
}

export const OrderController = {
  createOrderController,
}
