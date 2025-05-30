import type { router } from '.'

type CreateRouteReturnPath<TPath> = {
    path: TPath
}

export type CreateRouteReturnNoParams<TPath> = {
    getPath: () => string
} & CreateRouteReturnPath<TPath>

export type CreateRouteReturnWithParams<TParams, TPath> = {
    getPath: (params: TParams) => string
} & CreateRouteReturnPath<TPath>

export type CreateRouteReturn<TParam> = CreateRouteReturnWithParams<TParam, string> | CreateRouteReturnNoParams<string>

type RouterType = typeof router

export type RouterTypeProps<TRoute extends keyof RouterType> = Parameters<RouterType[TRoute]['getPath']>[0]
