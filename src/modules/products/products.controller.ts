import { Request, Response } from 'express'
import { ProductService } from './products.service'
import productsValidationSchema from './products.validationJoi'
import { TProducts } from './products.interface'

const productCreateController = async (req: Request, res: Response) => {
  try {
    const products = req.body
    const { error, value } = productsValidationSchema.validate(products)
    if (error) {
      console.log(error)
    }
    const result = await ProductService.createProduct(value)
    res.status(200).json({
      success: true,
      message: 'Product inserted succefully',
      data: result,
    })
  } catch (err: any) {
    res.status(500).json({
      status: false,
      message: err.message || 'Something Went is wrong',
      error: err,
    })
  }
}

const getAllProductController = async (req: Request, res: Response) => {
  try {
    const searchTerm = req.query.searchTerm as string
    if (searchTerm) {
      const result = await ProductService.getAllProductsFromDb(searchTerm)
      res.status(200).json({
        success: true,
        message: 'Product Find succefully',
        data: result,
      })
    } else {
      const result = await ProductService.getAllProductsFromDb()
      res.status(200).json({
        success: true,
        message: 'Getting all data succefully!',
        data: result,
      })
    }
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went is wrong!',
      error: err,
    })
  }
}

const getSingleProductController = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params

    const result = await ProductService.getSingleProductFromDb(productId)
    res.status(200).json({
      success: true,
      message: 'Getting single data succefully!',
      data: result,
    })
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something is wrong',
      error: err,
    })
  }
}

const updateSingleProductController = async (req: Request, res: Response) => {
  const { productId } = req.params
  const productData: Partial<TProducts> = req.body
  const result = await ProductService.updateSignleProduct(
    productId,
    productData,
  )
  console.log(result)
  res.status(200).json({
    success: true,
    message: 'Updated Successfully',
    data: result,
  })
}

const deleteSingleProductController = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params
    const result = await ProductService.deleteSingleProduct(productId)
    res.status(200).json({
      success: true,
      message: 'Product delete succefully',
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

export const ProductControllerService = {
  productCreateController,
  getAllProductController,
  getSingleProductController,
  updateSingleProductController,
  deleteSingleProductController,
}
