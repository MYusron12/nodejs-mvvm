import express from 'express'
import bodyParser from 'body-parser'
const app = express()
import userRoutes from './routes/user/userRoutes.js'
app.use(bodyParser.json())
app.use('/api', userRoutes)
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))