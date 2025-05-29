import { RouterViews } from './router/RouterViews'
import { TrpcProvider } from './shared/TrpcProvider'

function App() {
    return (
        <TrpcProvider>
            <RouterViews />
        </TrpcProvider>
    )
}

export default App
