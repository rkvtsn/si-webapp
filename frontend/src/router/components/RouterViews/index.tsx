import { Route, Routes } from 'react-router'
import routes from '../../routes'

export const RouterViews = () => {
    return (
        <Routes>
            {routes.map((props) => {
                return <Route key={props.path} {...props} />
            })}
        </Routes>
    )
}
