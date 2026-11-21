import express from 'express';
import jwt from 'jsonwebtoken';
import { UserModel } from './db.js'

const JWT_SECRET = 'kldfkh238efsfTWER323@#SD%3se';

const app = express();
app.use(express.json());

app.post("/api/v1/signup", async (req, res) => {
    // zod validation
    const username = req.body.username;
    const password = req.body.password;
    const userExist = await UserModel.findOne({
        username,
        password
    })

    if (userExist) {
        const token = jwt.sign({
            id: userExist._id
        }, JWT_SECRET);

        res.json({
            token: token
        })
    } else {
        res.status(403).json({
            msg: "Invalid Credentials"
        })
    }

    await UserModel.create({
        userName: username,
        password: password
    })

    res.json({
        msg: "User Signed up!",
    })  
})

app.post("/api/v1/signin", (req, res) => {

})

app.get("/api/v1/content", (req, res) => {

})

app.post("/api/v1/content", (req, res) => {

})

app.delete("/api/v1/content", (req, res) => {

})

app.post("/api/v1/brain/share", (req, res) => {

})

app.get("/api/v1/brain/:shareLink", (req, res) => {

})

app.listen(3000);