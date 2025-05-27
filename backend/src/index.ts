import * as trpc from '@trpc/server/adapters/express'
import cors from 'cors'
import express from 'express'

import { trpcRouter } from './trpc/index'

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
