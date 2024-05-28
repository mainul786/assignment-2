import { Request, Response } from 'express'
import { ProductService } from './products.service'
import productsValidationSchema from './products.validationJoi'

const productCreateController = async (req: Request, res: Response) => {
  try {
    const products = req.body
    const { error, value } = productsValidationSchema.validate(products)
    if (error) {
      console.log(error)
    }
    const result = await ProductService.createProduct(value)
    res.status(200).json({
      status: true,
      message: 'Product inserted succefully',
      data: result,
    })
  } catch (err) {
    res.status(500).json({
      status: false,
      message: err.message || 'Something Went is wrong',
      error: err,
    })
  }
}

const getAllProductController = async (req: Request, res: Response) => {
  try {
    const result = await ProductService.getAllProductsFromDb()
    res.status(200).json({
      status: true,
      message: 'Getting all data succefully!',
      data: result,
    })
  } catch (err) {
    res.status(500).json({
      status: false,
      message: err.message || 'something went is wrong!',
      error: err,
    })
  }
}

export const ProductControllerService = {
  productCreateController,
  getAllProductController,
}
