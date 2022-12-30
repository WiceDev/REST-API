require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

// Connect to MongoDB

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", console.error);
db.once("open", () => {
  console.log("Connected to mongod server");
});

const users = require("./routes/users");

app.use(express.json());

app.use("/users", users);

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
