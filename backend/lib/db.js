import mongoose from 'mongoose'

const connectDB = async (url) => {
    try{
        await mongoose.connect(url);
        console.log("Connected to the data base successfully")
    }catch(error){
        console.log("Failed to connect to the data base")
        process.exit(1)
    }
}

export default connectDB