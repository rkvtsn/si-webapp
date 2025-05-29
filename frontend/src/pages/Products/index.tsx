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
            {products?.map((product) => <div key={product.id}>{product.name}</div>)}
        </div>
    )
}

export default Products
