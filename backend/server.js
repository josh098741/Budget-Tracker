import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()



const PORT = process.env.PORT || 5000

const start = async () => {
    try{
        app.listen(PORT, () => {
            console.log(`Server Running on Port ${PORT}`)
        })
    }catch(error){

    }
}

start()