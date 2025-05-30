import Home from '../pages/Home'
import Product from '../pages/Product'
import Products from '../pages/Products'
import { ROUTES } from './routerKeys'

export default [
    { path: ROUTES.root.path, index: true, element: <Home /> },
    { path: ROUTES.products.path, element: <Products /> },
    { path: ROUTES.product.path, element: <Product /> },
] as const
