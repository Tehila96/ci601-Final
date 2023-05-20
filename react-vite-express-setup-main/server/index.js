var bodyParser = require('body-parser');
var fileupload = require("express-fileupload");
const express = require("express"),
  PORT = 5000,
  app = express();

const db = require("./db");
const connection = db.connection;

const env = require("dotenv").config({ path: "./.env" });

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-11-15",
});

app.use(express.static(process.env.STATIC_DIR));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(fileupload());

app.get("/api/v1/all-items", (req, res) => {
  connection.query(
    'SELECT * FROM items',
    function (err, items) {
      res.send(items);
    }
  );
});

app.get("/api/v1/items/", (req, res) => {
  let gender = req.query.gender;
  let sql = 'SELECT * FROM items WHERE gender=?'
  connection.query(sql, [gender],
    function (err, items) {
      res.send(items);
    }
  );
});

app.post("/api/v1/closet", (req, res) => {
  let newItem = {
    colour: req.body.colour,
    size: req.body.size,
    gender: req.body.gender,
    brand: req.body.brand,
    state: req.body.state,
    description: req.body.description,
    itemTitle: req.body.itemTitle,
    image: req.files.image.data,
    price: req.body.price,
    category: req.body.category,
    stock: req.body.stock
  }
  let sql = 'INSERT INTO items SET?'
  connection.query(sql, newItem,
    function (err, result) {
      if (err) throw err;
      console.log("Number of records inserted: " + result.affectedRows);
      res.send(newItem);
    })
});

app.get("/api/v1/config", (req, res) => {
  res.send({
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  });
});

app.post("/api/v1/create-payment-intent/", async (req, res) => {
  if(req.body.price < 0.4) return res.status(400).send({ error: {
      message: "Bad request, charging amount under 0.4 pounds isn't possible",},
  });
  const priceInPence = req.body.price;
  const priceInPounds = priceInPence*100;
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      currency: "GBP",
      amount: priceInPounds,
      automatic_payment_methods: { enabled: true },
    });

    // Send publishable key and PaymentIntent details to client
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (e) {
    return res.status(400).send({
      error: {
        message: e.message,
      },
    });
  }
});
app.put("/api/v1/sold/", async (req, res) => {
  const idToSell = req.body.id;
  let sql = 'INSERT INTO items Wh?'
  connection.query(sql, newItem,
    function (err, result) {
      if (err) throw err;
      console.log("Number of records inserted: " + result.affectedRows);
      res.send(newItem);
    })
});

app.listen(PORT, () =>
  console.log(`start listening on port : ${PORT}`));
