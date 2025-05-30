import type { CreateRouteReturnNoParams, CreateRouteReturnWithParams } from '../types'

export function createRoute<TString extends string>(path: TString): CreateRouteReturnNoParams<TString>

export function createRoute<TParams extends Record<string, string> = never, TString extends string = string>(
    path: TString
): CreateRouteReturnWithParams<TParams, TString>

export function createRoute<TParams extends Record<string, string> = never, TString extends string = string>(
    path: TString
): CreateRouteReturnNoParams<TString> | CreateRouteReturnWithParams<TParams, TString> {
    const getPathWithParams = (params: TParams): string => {
        if (!params) {
            return path
        }
        let result: string = path
        for (const key of Object.keys(params)) {
            result = result.replace(`:${key}`, `${params[key]}`)
        }
        return result
    }

    const getPath = path.includes(':') ? getPathWithParams : () => path

    return { path, getPath }
}
