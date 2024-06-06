import { Order } from './orders.model'

const createOrder = async (order: string) => {
  const result = await Order.create(order)
  return result
}

const getOrdderFromDb = async (email?: string) => {
  if (email) {
    const result = await Order.find({
      email,
    })
    return result
  } else {
    const result = await Order.find()
    return result
  }
}

export const OrderService = {
  createOrder,
  getOrdderFromDb,
}
