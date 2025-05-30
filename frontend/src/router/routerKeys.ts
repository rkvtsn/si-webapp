import { createRoute } from './route'

export const ROUTES = {
    root: createRoute('/'),
    products: createRoute('/products'),
    product: createRoute<{ productId: number }>('/products/:productId'),
} as const

export type RoutesReturn = typeof ROUTES
