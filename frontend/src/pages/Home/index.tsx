import { Link } from 'react-router'
import { router } from '../../router'

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <Link to={router.products.getPath()}>Products</Link>
        </div>
    )
}

export default Home
