import Joi from 'joi'

const productVariantValidationSchema = Joi.object({
  type: Joi.string(),
  value: Joi.string(),
})

const productInventoryValidationSchema = Joi.object({
  quantity: Joi.number().integer().min(0),
  inStock: Joi.boolean(),
})

const productsValidationSchema = Joi.object({
  name: Joi.string(),
  description: Joi.string(),
  price: Joi.number(),
  category: Joi.string(),
  tags: Joi.array().items(Joi.string()),
  variants: Joi.array().items(productVariantValidationSchema),
  inventory: productInventoryValidationSchema,
})

export default productsValidationSchema
