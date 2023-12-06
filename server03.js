const { log } = require("console");
const express = require("express")
const app = express()
const PORT = 3000;
const path = require("path")
app.use(express.urlencoded({
  extended: true
}));

app.listen(PORT, function () {
  console.log("start serwera na porcie " + PORT)
})
app.use(express.static('static'))

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/static/formularzpost.html"))
})
app.post("/handleForm", function (req, res) {
  res.send(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
    *{
      background-color: ${req.body.color} ;
    }
  </style>
  </head>
  
  <body>
  <h1 style="text-align:center; font-size:100px; color:white">${req.body.color}</h1>
  </body>
  
  </html>`);
})