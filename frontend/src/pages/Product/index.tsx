import type { RouterTypeProps } from '../../router/types'

const Product = ({ productId }: RouterTypeProps<'product'>) => {
    return <div>Product {productId}</div>
}

export default Product
