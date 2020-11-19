// // create_payment_intent
// const stripe = require("stripe")(`${process.env.STRIPE_SECRET_KEY}`);

// const create_payment_intent = async (req, res) => {
//   // create payment intent with order amount and currency

//   const { total } = req.body;
//   const paymentIntent = await stripe.paymentIntents.create({
//     amount: total,
//     currency: "gbp",
//   });
//   res.status(201).send({
//     clientSecret: paymentIntent.client_secret,
//   });
// };

// module.exports = {
//   create_payment_intent,
// };
