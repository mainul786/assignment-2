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

export const ProductService = {
  createProduct,
  getAllProductsFromDb,
}
