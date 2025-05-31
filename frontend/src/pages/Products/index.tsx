import { Link } from 'react-router'
import { trpc } from '../../shared/TrpcProvider'
import { router } from '../../router'

const Products = () => {
    const { data: products, isLoading, isFetching, isError, error } = trpc.products.useQuery()
    if (isLoading || isFetching) {
        return <div>...loading</div>
    }
    if (isError) {
        return <div>{error.message}</div>
    }
    return (
        <div>
            <h1>Products:</h1>
            {products?.map((product) => (
                <div key={product.id}>
                    <Link to={router.product.getPath({ productId: product.id.toString() })}>
                        <div>
                            {product.name} - ${product.price}
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Products
