const express = require("express");
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET);
const app = express();
app.use(require("cors")());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post("/checkout-page", async (req, res) => {
  const stripeSession = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "T-shirt",
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: "http://localhost:3000/thanks",
    cancel_url: "http://localhost:3000/",
  });

  res.json({ id: stripeSession.id });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
