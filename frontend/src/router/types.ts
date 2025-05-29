import type { ComponentProps } from 'react'
import type { Route } from 'react-router'
import type RouterConfig from './config'

export type RouteProps<K> = ComponentProps<typeof Route> & { path: K }

export type RouterConfigType = typeof RouterConfig

export type RouterPathType = RouterConfigType[number]['path']
