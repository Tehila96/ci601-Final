var mysql = require('mysql2');

var con = mysql.createConnection({
    host: 'ts813.brighton.domains',
    user: 'ts813_user123',
    password: 'Taylor011196**',
    database: 'ts813_ci601'
});

con.connect(function (err) {
    if (err) throw err;
    var sql = "DELETE FROM items";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Number of records deleted: " + result.affectedRows);
    });
});

con.connect(function (err) {
    if (err) throw err;
    var sql = "Drop Table items";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Number of records deleted: " + result.affectedRows);
    });
});


con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE items (itemID int NOT NULL AUTO_INCREMENT, itemTitle VARCHAR(1000) NOT NULL, colour VARCHAR(40) NOT NULL, size VARCHAR(30) NOT NULL, gender ENUM('WOMEN', 'MEN') NOT NULL, brand VARCHAR(40), state ENUM ('new', 'used-like new', 'used-good', 'used-fair') NOT NULL, description VARCHAR(1000), image LONGBLOB NOT NULL, price DECIMAL(8, 2) NOT NULL, category ENUM ('Tops', 'Bottoms','Shoes','Accessories') NOT NULL,  stock ENUM ('Sold', 'Available') NOT NULL, PRIMARY KEY (itemID))";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO items (colour , size , gender, brand , state,itemTitle, description , image , price , category , stock ) VALUES ('Red', 'Small','Women','Zara','New','title1' ,'A red short sleeve Zara top- never been worn','','5','Tops','Available'), ('Orange', 'Large','Men','Primark','Used-like new','title2', 'Orange flipflops','','10','Shoes','Available'), ('Blue', 'x-Small','Men','Holister','used-good','title3' , 'Men blue tank top','','32','Tops','Sold'), ('Silver', 'Medium','Women','Bershka','New','title4', 'Silver butterfly ring','','25','Accessories','Available')";
    con.query(sql, function (err, result) {
        if (err) throw err;
    });
});