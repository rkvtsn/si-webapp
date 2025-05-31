import type { RouterTypeProps } from '../../router/types'
import { trpc } from '../../shared/TrpcProvider'

const Product = ({ productId }: RouterTypeProps<'product'>) => {
    const { data: product, isLoading, isFetching, isError, error } = trpc.product.useQuery({ id: productId })
    if (isLoading || isFetching) {
        return <div>...loading</div>
    }
    if (isError) {
        return <div>{error.message}</div>
    }
    if (!product) {
        return (
            <div>
                <h1>Not found</h1>
            </div>
        )
    }
    return (
        <div>
            <h1>
                Product: {product?.name} (${product.price})
            </h1>
            <div>{product.description}</div>
        </div>
    )
}

export default Product
