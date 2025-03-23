import express from 'express'
import 'dotenv/config'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true,
    limit: '30mb'
}))
app.use(cors())


app.use("/", (req, res) => {
    res.send("13")
})


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})