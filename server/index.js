import express from 'express'
import 'dotenv/config'
import bodyParser from 'body-parser'
import cors from 'cors'
import posts from './routers/posts.js'
import mongoose from 'mongoose'

const app = express()
const PORT = process.env.PORT || 5000

const URI = 'mongodb+srv://tutorial-mern:mR6WVwedrva97JYF@tutorial-mern.bqp3x.mongodb.net/?retryWrites=true&w=majority&appName=tutorial-mern'

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true,
    limit: '30mb'
}))
app.use(cors())


app.use("/posts", posts)
// , {useNewUrlParser: true, useUnifiedTopology: true}
mongoose.connect(URI)
    .then(() => {
        console.log("Connected to DB")
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`)
        })
    })
    .catch((err) => {
        console.log('err', err)
    })



