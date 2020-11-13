require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const itemRoutes = require("./routes/itemRoutes");
const authRoutes = require("./routes/authroutes");

// app setup
const app = express();
const port = process.env.port || 4242;

// middleware
app.use(express.json());
app.use(cors());

// db config
const mongoAdminPassword = process.env.MONGO_ADMIN_PASSWORD;
const connection_url = `mongodb+srv://admin:${mongoAdminPassword}@cluster0.nmelt.mongodb.net/TBR?retryWrites=true&w=majority`;

mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("connected to mongodb");
});

// routes

app.get("/", (req, res) => {
  res.status(200).send("welcome to TBR server");
});

app.use(itemRoutes);
app.use(authRoutes);

// listen
app.listen(port, () => console.log(`listening on ${port}`));
