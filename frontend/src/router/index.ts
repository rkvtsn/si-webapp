import { createRoute } from './utils/createRoute'

export const router = {
    root: createRoute('/'),
    product: createRoute<{ productId: string }>('/products/:productId'),
    products: createRoute('/products'),
} as const
