import { initTRPC } from '@trpc/server'

const trpc = initTRPC.create({ isServer: true })

export const trpcRouter = trpc.router({
    products: trpc.procedure.query(() => {
        return [{ id: 1, name: 'Hello', price: 3.14 }]
    }),
})

export type TRPCRouter = typeof trpcRouter
