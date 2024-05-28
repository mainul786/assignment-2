import { Order } from './orders.model'

const createOrder = async (order: string) => {
  const result = await Order.create(order)
  return result
}

export const OrderService = {
  createOrder,
}
