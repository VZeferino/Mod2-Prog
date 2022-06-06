const express = require('express'); 
const app = express();

const hostname = '127.0.0.1';
const port = 3061;
const sqlite3 = require('sqlite3').verbose();
const DBPATH = 'Banco_de_dados.db';

const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.json());

app.get('/get', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');

	var db = new sqlite3.Database(DBPATH);
  var sql = 'SELECT * FROM MeuCurrículo';
	db.all(sql, [],  (err, rows ) => {
		if (err) {
		    throw err;
		}
		res.json(rows);
	});
	db.close();
});

app.post('/userinsert', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');

	sql = "INSERT INTO tbUser (title, id, completed) VALUES ('" + req.body.title + "', 33, false)";
	var db = new sqlite3.Database(DBPATH);
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
	});
	db.close();
	res.end();
});

app.put('/userupdate', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');

	sql = "UPDATE tbUser SET title = '" + req.body.title + "' WHERE userId = " + req.body.userId;
	var db = new sqlite3.Database(DBPATH);
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
		res.end();
	});
	db.close(); 
});

app.delete('/userdelete', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');

	sql = "DELETE FROM tbUser WHERE userId = " + req.body.userId;
	var db = new sqlite3.Database(DBPATH);
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
		res.end();
	});
	db.close();
});


app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});