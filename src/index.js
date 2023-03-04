require("./db/conn");
require("dotenv").config();
const port = process.env.PORT;
const express = require("express");
const app = express();
const userRouter = require("./routers/user");
const newsRouter = require("./routers/news");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { Server } = require('socket.io');

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));

app.use(express.json());
app.use(cookieParser());

app.use(userRouter);
app.use(newsRouter);

const io = new Server(app, {
    cors: {
        origin: "http://localhost:5173",
    }
});

io.on("connection", (socket) => {
    console.log(socket.id);

    socket.on("join_room", (data) => { 
        socket.join(data);
        console.log(`User with id: ${socket.id} joined room ${data}`);
    })

    socket.on("send_message", (data) => {
        console.log(data);
    })


    socket.on("disconnect", () => {
        console.log("User disconnected", socket.id);
    })
})

app.listen(port, () => {
    console.log(`Connected to port ${port}`);
});