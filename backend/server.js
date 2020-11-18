require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const itemRoutes = require("./routes/itemRoutes");
const authRoutes = require("./routes/authroutes");

// app setup
const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-control-Allow-Headers", "*");
  next();
});

// db config
const mongoAdminPassword = process.env.MONGO_ADMIN_PASSWORD;
const connection_url = `mongodb+srv://admin:${mongoAdminPassword}@cluster0.nmelt.mongodb.net/TBR?retryWrites=true&w=majority`;

mongoose
  .connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((err) => console.log(err));

// routes

app.get("/", (req, res) => {
  res.status(200).send("welcome to TBR server");
});

app.use(itemRoutes);
app.use(authRoutes);

// listen
app.listen(process.env.PORT || 80, () => console.log(`listening`));
