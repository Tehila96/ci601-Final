const express = require("express"),
  PORT = 5000,
  app = express();

  const db = require("./db");
  const connection = db.connection;

app.get("/api/v1/items", (req, res) => {
  connection.query(
    'SELECT * FROM items',
    function(err, items) {
      console.log(items); // results contains rows returned by server
      res.send(items);
    }
  );
});

app.listen(PORT, () => 
  console.log(`start listening on port : ${PORT}`));