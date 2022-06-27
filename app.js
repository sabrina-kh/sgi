const express = require("express")
const app = express()

// ---connect to database---
const dbConnect = require('./database/db')
dbConnect()

// ---set up body parser middleware---
app.use(express.json({ extended: false }))

// ---define routes---
app.use('/users', require("./routes/user.route"))
app.use('/clients', require("./routes/client.route"))
app.use('/respvente', require("./routes/respVente.route"))
app.use('/respstock', require("./routes/respStock.route"))
app.use('/respreglement', require("./routes/respReglement.route"))
app.use('/articles', require("./routes/article.route"))
app.use('/commandes', require("./routes/commande.route"))


app.listen(3010, () => {
    console.log('App is running')
})
