import 'dotenv/config'
import 'reflect-metadata'
import './database'
import express from "express"
import cors from 'cors'

import router from './routes'

const app = express()

app.use(express.json())

app.use(cors())

app.use(router)

app.listen(process.env.PORT || "3000", () => {
    console.log("server on")
})