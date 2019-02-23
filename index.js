const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const hotels = require("./routes/api/hotels");

const app = express();

// BODYPARSER MIDDLEWARE
app.use(bodyParser.json());

// DB CONFIG
const db = require("./config/keys").mongoURI;

// CONNECT TO MONGO
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDb Connected..."))
  .catch(err => console.log(err));

// USE ROUTES

app.use("/api/hotels", hotels);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));
