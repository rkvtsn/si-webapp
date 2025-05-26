import express from 'express'
import * as trpc from '@trpc/server/adapters/express'
import { trpcRouter } from './trpc/index'
import cors from 'cors'

const app = express()

app.use(cors())

app.get('/echo', () => {
    console.log('echo')
})

app.use(
    '/trpc',
    trpc.createExpressMiddleware({
        router: trpcRouter,
    })
)

app.listen(3000, () => {
    console.info('Listening express at http://localhost:3000')
})
