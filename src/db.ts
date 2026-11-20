// import mongoose from 'mongoose';
import mongoose, { model, Schema } from 'mongoose';

mongoose.connect('mongodb+srv://himanshujangra70152_db_user:c3IcRcnr3I0nvF3f@cluster0.xdymgoi.mongodb.net/brainly');

const UserSchema = new Schema({
    userName: {type: String, unique: true},
    age: Number,
    password: String
})

export const UserModel = model('User', UserSchema);



