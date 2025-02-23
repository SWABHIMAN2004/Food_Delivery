import mongoose from "mongoose";

export const connectDB= async ()=> {
    await mongoose.connect('mongodb+srv://swabhimansubudhi04:124578@cluster0.ytdfa.mongodb.net/food-del').then(()=>console.log('DB Connected'));
}