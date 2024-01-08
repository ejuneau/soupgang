const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const sqlite3 = require('sqlite3').verbose();
const { v4: uuidv4 } = require("uuid");

const indexRouter = require("./routes/index");

const usersModule = require("./routes/users");
const usersRouter = usersModule.router;

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

app.use("/", indexRouter);
app.use("/users", usersRouter);

let db = new sqlite3.Database('./bin/credentials.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to credentials database.')
});

app.post('/validatePassword', (req, res) => {
  const { username, password } = req.body;

  db.all(`SELECT * FROM credentials WHERE username = '${username}' AND password = '${password}'`, (err, rows) => {
    if (err) {
      console.log(err);
    }
    if ( rows.length > 0 ) {
      res.send({validation: true});
    } else {
      res.send({validation: false});
    }
  })
})

app.put('/createUser', (req, res) => {
  const { username, password, email } = req.body;

  db.all(`INSERT INTO credentials(username, password, email) VALUES('${username}', '${password}', '${email}');`, (err, rows) => {
    if (err) {
      throw err;
    } else {
      res.send(200)
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

//feature 1: delete an account

//feature 2: change password

//feature 3: change username


module.exports = app;
