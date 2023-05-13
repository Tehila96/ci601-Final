var bodyParser = require('body-parser');
var cors = require('cors')
const express = require("express"),
  PORT = 5000,
  app = express();

const db = require("./db");
const connection = db.connection;
const options = {
  origin: 'http://localhost:3000',
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors(options))

app.get("/api/v1/items", (req, res) => {
  connection.query(
    'SELECT * FROM items',
    function (err, items) {
      res.send(items);
    }
  );
});

app.get("/api/v1/items/men", (req, res) => {
  connection.query(
    'SELECT * FROM items WHERE gender = "MEN"',
    function (err, items) {
      console.log(items); // results contains rows returned by server
      res.send(items);
    }
  );
});

app.get("/api/v1/items/women", (req, res) => {
  connection.query(
    'SELECT * FROM items WHERE gender = "WOMEN"',
    function (err, items) {
      res.send(items);
    }
  );
});

app.post("/closet", (req, res) => {
  let newItem = {
    ...req.body
  }
  let sql = "INSERT INTO items SET?"
  connection.query(sql, newItem,

    function (err, result) {
      if (err) throw err;
      console.log("Number of records inserted: " + result.affectedRows);
      res.send(newItem);
    })
});


app.listen(PORT, () =>
  console.log(`start listening on port : ${PORT}`));
