import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

import connectDB from './lib/db.js'

const app = express()

app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 5000
const MONGO_URI = process.env.MONGO_URI

const start = async () => {
    try{
        await connectDB(MONGO_URI)
        app.listen(PORT, () => {
            console.log(`Server Running on Port ${PORT}`)
        })
    }catch(error){
        console.log("Error in running the server")
    }
}

start()