import express from 'express';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import routes from './routes/routes.js'

const app = express()

const __dirname = dirname(fileURLToPath(import.meta.url))

app.use(express.json())

app.use('/api', routes)

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

const HOST = process.env.HOST || 'localhost'
const PORT = process.env.PORT || 4000
app.listen(PORT, HOST, () => {
    console.log(`Server listens http://${HOST}:${PORT}`)
})