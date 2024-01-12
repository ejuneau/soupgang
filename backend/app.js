const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const sqlite3 = require('sqlite3').verbose();
const { v4: uuidv4 } = require("uuid");

const cors = require("cors");

const app = express();
app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

let db = new sqlite3.Database('./bin/credentials.db', (err) => {
  if (err) {
    console.error(err.message);
  } else {
  console.log('Connected to credentials database.')
  }
});

app.post('/validatePassword', (req, res) => {
  const { username, password } = req.body;
  db.all(`SELECT * FROM credentials WHERE username = '${username}' AND password = '${password}'`, (err, rows) => {
    if (err) {
      console.log(err);
    }
    if ( rows.length > 0 ) {
      res.send({validation: true, user: rows[0]});
      console.log(`User ${username} has logged in with password ${password}`)
    } else {
      res.send({validation: false});
    }
  })
})

app.post('/createUser', (req, res) => {
  const { username, password, email } = req.body;
  const newId = uuidv4();
  db.all(`INSERT INTO credentials(id, username, password, email) VALUES('${newId}', '${username}', '${password}', '${email}');`, (err, rows) => {
    if (err) {
      throw err;
    } else {
      console.log(`User ${username} created`)
      res.sendStatus(200)
    }
  })
})

app.get('/api', (req, res) => {
  res.json({"Hello":"World"})
})

app.get('/users', (req, res) => {
  db.all("SELECT * FROM credentials", (err, rows) => {
    if (err) {
      throw err;
    } else {
      res.json(rows);
    }
  })
})

//feature 1: retrieve account details

app.get('/profiles/:id', (req, res) => {
  const id = req.params.id;
  db.all(`SELECT * FROM credentials WHERE id = '${id}'`, (err, rows) => {
    if (err) {
      throw err;
    } else {
      console.log(`Information for user ${id} retrieved.`)
      res.send(rows[0]);
    }
  })
})
//feature 2: change account info

app.put('/profiles/:id', (req, res) => {
  const id = req.params.id;
  const { username, password, email, first_name, last_name, address } = req.body;
  db.all(`UPDATE credentials SET username = '${username}', password = '${password}', email='${email}', first_name='${first_name}', last_name='${last_name}', address='${address}' WHERE id = '${id}'`, (err, rows) => {
    if (err) {
      throw err;
    } else {
      console.log(id);
      console.log(`Information for user ${id} updated.`);
      res.sendStatus(200);
    }
  })
  
})

//feature 3: delete a user


module.exports = app;
