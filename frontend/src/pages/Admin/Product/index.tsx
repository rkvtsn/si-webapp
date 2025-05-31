import type { RouterTypeProps } from '../../../router/types'

const AdminProduct = ({ productId }: RouterTypeProps<'adminProduct'>) => {
    return <div>Product: {productId}</div>
}

export default AdminProduct
