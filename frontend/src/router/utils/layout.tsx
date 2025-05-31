import type { ComponentProps } from 'react'
import { Route } from 'react-router'

type RouteProps = ComponentProps<typeof Route>

export const layout = ({ component }: { component: () => React.ReactNode }, routes: RouteProps[]): RouteProps => {
    const Component = component
    return {
        element: <Component />,
        children: routes.map((route) => <Route key={route.path} {...route} />),
    }
}
