const express = require("express");
const app = express();
const port = 3000;

//routes
const usersRouter = require("./routes/users.js");
const authRouter = require("./routes/auth.js");
const cartRouter = require("./routes/cart.js");
//

const cors = require("cors");

require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const mongoose = require("mongoose");
app.get("/", (req, res) => {
  res.send("welcome");
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.MONGO_DB, console.log("mongoose connected"));

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection err:"));
db.once("open", () => {
  console.log("database connected", process.env.MONGO_DB);
});

app.use(authRouter);
app.use("/api/users", usersRouter);
app.use("/api/cart", cartRouter);

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});
