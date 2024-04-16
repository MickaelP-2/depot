const express = require("express")
const app = express()
require("dotenv").config()
const gameRouter = require("./router/gamesRouter.js")
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.listen(process.env.SERVER_PORT, () => {
  console.log("App running on port " + process.env.SERVER_PORT)
})

app.set("view engine", "ejs")
app.set("views", "./views")

app.use("/games", gameRouter)