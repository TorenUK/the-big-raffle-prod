require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const stripe = require("stripe")(`${process.env.STRIPE_SECRET_KEY}`);

const itemRoutes = require("./routes/itemRoutes");
const authRoutes = require("./routes/authroutes");
const orderRoutes = require("./routes/orderRoutes");
// const paymentRoutes = require("./routes/paymentRoutes");

// app setup
const app = express();

// middleware
app.use(cors());
app.use(express.json());

// db config
const mongoAdminPassword = process.env.MONGO_ADMIN_PASSWORD;
const localMongoPassword = process.env.LOCAL_MONGO_PASSWORD;
const connection_url = `mongodb+srv://admin:${process.env.MONGO_ADMIN_PASSWORD}@cluster0.nmelt.mongodb.net/TBR?retryWrites=true&w=majority`;

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
app.post("/create-payment-intent", async (req, res) => {
  const { total } = req.body;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "gbp",
  });

  res.status(201).json({
    clientSecret: paymentIntent.client_secret,
  });
});

app.use(itemRoutes);
app.use(authRoutes);
app.use(orderRoutes);
// app.use(paymentRoutes);

// listen
app.listen(process.env.PORT || 8080, () => console.log(`listening`));
