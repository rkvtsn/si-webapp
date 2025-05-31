import { initTRPC } from '@trpc/server'
import { z } from 'zod'

const trpc = initTRPC.create({ isServer: true })

const NAMES = [
    'some',
    'veg',
    'generic',
    'common',
    'portable',
    'PC',
    'doll',
    'smart',
    'generous',
    'good',
    'best',
    'poll',
]

const WORDS =
    'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'.split(
        ' '
    )

type Product = {
    id: string
    name: string
    price: number
    description: string
}

const PRODUCTS: Product[] = Array(20)
    .fill({})
    .map((_, i) => ({
        id: `${i + 1}`,
        name: `Product ${NAMES[Math.floor(Math.random() * NAMES.length)]}`,
        price: 3.14,
        description:
            Array(Math.floor(Math.random() * 20) + 10)
                .fill('')
                .map(() => WORDS[Math.floor(Math.random() * WORDS.length)])
                .join(' ') + '.',
    }))

export const trpcRouter = trpc.router({
    products: trpc.procedure.query(() => {
        return PRODUCTS.map(({ id, name, price }) => ({ id, name, price }))
    }),
    product: trpc.procedure
        .input(
            z.object({
                id: z.string(),
            })
        )
        .query(({ input }) => PRODUCTS.find(({ id }) => input.id === id)),
})

export type TRPCRouter = typeof trpcRouter
