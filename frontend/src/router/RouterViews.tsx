import { Route, Routes } from 'react-router'
import config from '.'

export const RouterViews = () => {
    return (
        <Routes>
            {config.map((routeProps) => (
                <Route key={routeProps.path} {...routeProps} />
            ))}
        </Routes>
    )
}
