const express = require("express")
const app = express()

// ---connect to database---
const dbConnect = require('./database/db')
dbConnect()

// ---set up body parser middleware---
app.use(express.json({ extended: false }))

// ---define routes---
app.use('/users', require("./routes/user.route"))
app.use('/products', require("./routes/article.route"))


app.listen(3010, () => {
    console.log('App is running')
})
