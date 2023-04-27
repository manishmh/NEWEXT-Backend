require("./db/conn");
require("dotenv").config();
const port = process.env.PORT;
const express = require("express");
const app = express();
const userRouter = require("./routers/user");
const newsRouter = require("./routers/news");
const weatherRouter = require("./routers/weather");
const stockRouter = require("./routers/stock");
const chatRouter = require("./routers/chat");
const messageRouter = require("./routers/message");
const cookieParser = require("cookie-parser");
const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

app.use(userRouter);
app.use("/news", newsRouter);
app.use("/weather", weatherRouter);
app.use("/stocks", stockRouter);
app.use("/chats", chatRouter);
app.use("/messages", messageRouter);

const server = app.listen(port, () => {
  console.log(`Connected to port ${port}`);
});

const io = require("socket.io")(server, {
  pingTimeout: 60000,
  cors: {
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
  }
})

const users = [{}];

io.on("connection", (socket) => {
  socket.on("joined", ({ user }) => {
    users[socket.id] = user;
    socket.emit("welcome", { message: `Welcome to the chat ${users[socket.id]}` })
  })

  socket.on("message", ({ message, id }) => {
    io.emit("sendMessage", { user: users[id], message, id })
  });
})
