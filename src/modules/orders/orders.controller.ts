import { Request, Response } from 'express'
import { OrderService } from './orders.service'
import OrdersValidationSchema from './order.validationJoi'

const createOrderController = async (req: Request, res: Response) => {
  try {
    const order = req.body
    const { error, value } = OrdersValidationSchema.validate(order)
    if (error) {
      console.log(error)
    }
    const result = await OrderService.createOrder(value)
    res.status(200).json({
      success: true,
      message: 'Order created successfully',
      data: result,
    })
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went is wrong',
      error: err,
    })
  }
}

const gettingDataFromDbController = async (req: Request, res: Response) => {
  const email = req.query.email as string

  if (email) {
    const result = await OrderService.getOrdderFromDb(email)
    res.status(200).json({
      success: true,
      message: 'geting order by email',
      data: result,
    })
  } else {
    const result = await OrderService.getOrdderFromDb()
    res.status(200).json({
      success: true,
      message: 'Getting orders succefully',
      data: result,
    })
  }
}

export const OrderController = {
  createOrderController,
  gettingDataFromDbController,
}
