export type TProductVariant = {
  type: string
  value: string
}

export type TProductInvetory = {
  quantity: number
  inStock: boolean
}

export type TProducts = {
  name: string
  description: string
  price: number
  category: string
  tags: string[]
  variants: TProductVariant[]
  inventory: TProductInvetory
}
