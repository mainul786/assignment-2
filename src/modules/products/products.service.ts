import { Product } from './product.model'
import { TProducts } from './products.interface'

const createProduct = async (productData: TProducts) => {
  const result = await Product.create(productData)
  return result
}

const getAllProductsFromDb = async (searchTerm?: string) => {
  if (searchTerm) {
    const searchRegEx = new RegExp(searchTerm, 'i')
    const result = await Product.find({
      $or: [
        { name: { $regex: searchRegEx } },
        { description: { $regex: searchRegEx } },
      ],
    })
    console.log(result)
    return result
  } else {
    const result = await Product.find()
    return result
  }
}

const getSingleProductFromDb = async (id: string) => {
  const result = await Product.findById({ _id: id })
  return result
}

const updateSignleProduct = async (
  id: string,
  productData: Partial<TProducts>,
) => {
  const result = await Product.findByIdAndUpdate(
    id,
    { $set: productData },
    { new: true, runValidators: true },
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
