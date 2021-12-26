import mongoose from "mongoose";

const userModel = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    age: Number,
});

export const user = mongoose.model('user', userModel);
