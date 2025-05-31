import { Link } from 'react-router'
import { router } from '../../router'
import styles from './styles.module.scss'

const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.header__nav}>
                <ul className={styles.header__navList}>
                    <li className={styles.header__navItem}>
                        <Link to={router.root.getPath()}>Home</Link>
                    </li>
                    <li className={styles.header__navItem}>
                        <Link to={router.products.getPath()}>Products</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
