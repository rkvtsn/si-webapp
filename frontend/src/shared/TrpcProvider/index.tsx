import { type PropsWithChildren } from 'react'
import { type TRPCRouter } from '@si/backend/src/trpc'
import { QueryClient } from '@tanstack/react-query'
import { createTRPCReact, httpBatchLink } from '@trpc/react-query'

export const TrpcProvider = ({ children }: PropsWithChildren) => {
    return (
        <trpc.Provider client={trpcClient} queryClient={queryClient}>
            {children}
        </trpc.Provider>
    )
}

export const trpc = createTRPCReact<TRPCRouter>()
const trpcClient = trpc.createClient({
    links: [
        httpBatchLink({
            url: 'http://localhost:3000/trpc',
        }),
    ],
})

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
            refetchOnWindowFocus: false,
        },
    },
})
