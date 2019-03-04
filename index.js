const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

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

// SERVE STATIC ASSETS

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));
