import express from 'express'

const app = express()

app.get('/echo', () => {
    console.log('echo')
})

app.listen(3000, () => {
    console.info('Listening express at http://localhost:3000')
})
