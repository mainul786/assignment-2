import { Product } from './product.model'
import { TProducts } from './products.interface'

const createProduct = async (productData: TProducts) => {
  const result = await Product.create(productData)
  return result
}

const getAllProductsFromDb = async () => {
  const result = await Product.find()
  return result
}

const getSingleProductFromDb = async (id: string) => {
  const result = await Product.findById({ _id: id })
  return result
}

const updateSignleProduct = async (id: string) => {
  const result = await Product.updateOne(
    { _id: id },
    { $set: { name: 'some' } },
  )
  return result
}

const deleteSingleProduct = async (id: string) => {
  const result = await Product.deleteOne({ _id: id })
  return result
}

export const ProductService = {
  createProduct,
  getAllProductsFromDb,
  getSingleProductFromDb,
  updateSignleProduct,
  deleteSingleProduct,
}
