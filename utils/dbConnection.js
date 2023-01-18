import mongoose from "mongoose"

const connectDB = () => {
    mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URI, { useNewUrlParser: true })
        .then(data=>console.log("- Database Online -"))
        .catch(err=>console.log(err))
} 

export default connectDB