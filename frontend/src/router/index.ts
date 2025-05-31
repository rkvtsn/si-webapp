import { createRoute } from './utils/createRoute'

export const router = {
    root: createRoute('/'),
    product: createRoute<{ productId: string }>('/products/:productId'),
    products: createRoute('/products'),
    adminProduct: createRoute<{ productId: string }>('/admin/product/:productId'),
} as const
