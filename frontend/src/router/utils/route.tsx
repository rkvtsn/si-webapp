import type { Route } from 'react-router'
import type { CreateRouteReturn } from '../types'
import type { ComponentProps } from 'react'
import { ComponentWithParams } from '../components/ComponentWithParams'

export const route = <TParam extends Record<string, string> = never>(props: {
    config: CreateRouteReturn<TParam>
    component: (() => React.ReactNode) | ((params: TParam) => React.ReactNode)
}): ComponentProps<typeof Route> => {
    return {
        path: props.config.path,
        element: <ComponentWithParams<TParam> component={props.component} />,
    }
}
