import express from 'express'
import { ProductControllerService } from './products.controller'

const router = express.Router()

router.post('/create-product', ProductControllerService.productCreateController)
router.get('/', ProductControllerService.getAllProductController)
export const ProducutsRoute = router
