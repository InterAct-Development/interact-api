import mongoose from "mongoose";

// Mongo Document constraints
interface User {
    _id: number,
    name: string,
    age: number,
    phone?: number,
    email: string,
    password: string,
}

// Email field constraints
const regExEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

// Model
const userModel = new mongoose.Schema<User>({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    phone: Number,
    email: {
        type: String,
        required: true,
        unique: true,
        match: regExEmail
    },
    password: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});
 
const UserModel = mongoose.model<User>('user', userModel);
export default UserModel;