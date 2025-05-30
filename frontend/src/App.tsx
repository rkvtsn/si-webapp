import { RouterViews } from './router/components/RouterViews'
import { TrpcProvider } from './shared/TrpcProvider'

function App() {
    return (
        <TrpcProvider>
            <RouterViews />
        </TrpcProvider>
    )
}

export default App
