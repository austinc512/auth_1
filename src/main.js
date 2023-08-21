const express = require("express");
require("dotenv").config();
// const usersRouter = require("./routers/users");
// console.log(process.env);

const app = express();

// const port = process.env.EXPRESS_PORT;
const port = process.env.EXP_PORT || 5001;

app.use(express.json());

// app.use(express.static("public"));

// app.use("/users", usersRouter);

let messageRoutes = require("./routes/messageRoutes");
let authRoutes = require("./routes/authRoutes");

app.use("/", messageRoutes);
app.use("/", authRoutes);

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});
