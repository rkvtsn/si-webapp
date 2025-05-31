import { Link } from 'react-router'
import { router } from '../../router'

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to={router.root.getPath()}>Home</Link>
                    </li>
                    <li>
                        <Link to={router.products.getPath()}>Products</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
