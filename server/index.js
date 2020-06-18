require('dotenv').config()
const express = require('express')
const session = require('express-session')
const massive = require('massive')

const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env

const app = express()
app.use(express.json())
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    rejectUnauthorized: false,
    cookie: {maxAge: 1000*60*60*24*7},
    secret: SESSION_SECRET
  })
)

massive({
  connectionString: CONNECTION_STRING,
  ssl: {rejectUnauthorized: false}
}).then((db) => {
  app.set('db', db)
  console.log('db connected')
  app.listen(SERVER_PORT, () => console.log(`Server running on port ${SERVER_PORT}`))
})