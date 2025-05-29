import { Link, type LinkProps, type To } from 'react-router'
import type { RouterPathType } from './types'

export const RouteLink = <T extends RouterPathType = RouterPathType>(props: RouteLinkProps<T>) => {
    if ('path' in props) {
        const { to, path, ...rest } = props
        return <Link to={to ?? path} {...rest} />
    }
    return <Link {...props} />
}

type RouteLinkProps<TRoutePath extends RouterPathType> =
    | LinkProps
    | (Omit<LinkProps, 'to'> & {
          to?: To
          path: TRoutePath | (string & {})
      })
