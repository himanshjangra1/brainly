// import mongoose from 'mongoose';
import mongoose, { model, Schema } from 'mongoose';
mongoose.connect('mongodb+srv://himanshujangra70152_db_user:c3IcRcnr3I0nvF3f@cluster0.xdymgoi.mongodb.net/brainly');
const UserSchema = new Schema({
    userName: { type: String, unique: true },
    age: Number,
    password: String
});
// Content schema
const ContentSchema = new Schema({
    title: String,
    link: String,
    tags: [{ type: mongoose.Types.ObjectId, ref: 'Tag' }],
    userId: { type: mongoose.Types.ObjectId, ref: 'User', require: true }
});
export const UserModel = model('User', UserSchema);
export const ContentModel = model('Content', ContentSchema);
//# sourceMappingURL=db.js.map