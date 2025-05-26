import Products from './pages/Products'
import { TrpcProvider } from './shared/TrpcProvider'

function App() {
    return (
        <TrpcProvider>
            <Products />
        </TrpcProvider>
    )
}

export default App
