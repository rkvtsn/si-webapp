import Home from '../pages/Home'
import Product from '../pages/Product'
import Products from '../pages/Products'
import { router } from '.'
import { route } from './utils/route'
import MainLayout from '../components/MainLayout'
import { layout } from './utils/layout'

export default [
    layout({ component: MainLayout }, [
        route({ config: router.root, component: Home }),
        route({ config: router.products, component: Products }),
        route({ config: router.product, component: Product }),
    ]),
] as const
