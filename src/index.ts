import express from "express";

const app = express();

app.use("/",async (req, res) => {
    res.status(200).end("Hello World")
})

app.listen(process.env.PORT)