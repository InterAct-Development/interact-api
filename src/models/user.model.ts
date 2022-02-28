import mongoose from 'mongoose';
import { Roles, studentRole, youthWorkerRole } from '../enums/roles';

// Mongo Document constraints
interface User {
    _id: number;
    name: string;
    age: number;
    phone?: string;
    email: string;
    password: string;
    role: string;
}

// Email field constraints
const regExEmail =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

// Model
const userModel = new mongoose.Schema<User>(
    {
        _id: mongoose.Schema.Types.ObjectId,
        name: {
            type: String,
            required: true,
        },
        age: {
            type: Number,
            required: true,
        },
        phone: String,
        email: {
            type: String,
            required: true,
            unique: true,
            match: regExEmail,
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            default: studentRole,
            enum: [youthWorkerRole, studentRole],
        },
    },
    {
        timestamps: true,
    }
);

const UserModel = mongoose.model<User>('user', userModel);
export default UserModel;
