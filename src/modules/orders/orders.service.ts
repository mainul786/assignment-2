import { Order } from './orders.model'

const createOrder = async (order: string) => {
  const result = await Order.create(order)
  return result
}

const getOrdderFromDb = async (email?: string) => {
  if (email) {
    const searchRegEx = new RegExp(email, 'i')
    const result = await Order.find({
      $or: [
        { email: { $regex: searchRegEx } },
        { description: { $regex: searchRegEx } },
      ],
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
