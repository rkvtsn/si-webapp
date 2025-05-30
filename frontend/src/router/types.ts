type CreateRouteReturn<TPath> = {
    path: TPath
}

export type CreateRouteReturnNoParams<TPath> = {
    getPath: () => string
} & CreateRouteReturn<TPath>

export type CreateRouteReturnWithParams<TParams, TPath> = {
    getPath: (params: TParams) => string
} & CreateRouteReturn<TPath>
