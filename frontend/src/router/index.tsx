import { route } from './route'
import Home from '../pages/Home'
import Product from '../pages/Product'
import Products from '../pages/Products'
import { ROUTER_KEYS } from './routerKeys'

export default [
    route({ path: ROUTER_KEYS.ROOT, index: true, element: <Home /> }),
    route({ path: ROUTER_KEYS.PRODUCTS, element: <Products /> }),
    route({ path: ROUTER_KEYS.PRODUCT, element: <Product /> }),
] as const
