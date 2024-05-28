import express from 'express'
import { ProductControllerService } from './products.controller'

const router = express.Router()

router.post('/create-product', ProductControllerService.productCreateController)
router.get('/', ProductControllerService.getAllProductController)
router.get('/:productId', ProductControllerService.getSingleProductController)

router.put(
  '/:productId',
  ProductControllerService.updateSingleProductController,
)
router.delete(
  '/:productId',
  ProductControllerService.deleteSingleProductController,
)
export const ProducutsRoute = router
