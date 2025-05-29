import { useParams } from 'react-router'

const Product = () => {
    const { productId } = useParams<{ productId: string }>()
    return <div>Product {productId}</div>
}

export default Product
