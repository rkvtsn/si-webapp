import { Link } from 'react-router'
import { ROUTES } from '../../router/routerKeys'
import { trpc } from '../../shared/TrpcProvider'

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
                    <Link to={ROUTES.product.getPath({ productId: product.id })}>{product.name}</Link>
                </div>
            ))}
        </div>
    )
}

export default Products
