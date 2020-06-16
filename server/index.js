const express = require('express')
const session = require('express-session')
const massive = require('massive')
const PORT = 4500


const app = express()
app.use(express.json())
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    rejectUnauthorized: false,
    cookie: {maxAge: 1000*60*60*24*7}
  })
)

massive({ssl: {rejectUnauthorized: false}}).then((db) => {
  app.set('db', db)
  console.log('db connected')
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
})