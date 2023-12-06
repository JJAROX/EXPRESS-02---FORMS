const { log } = require("console");
const express = require("express")
const app = express()
const PORT = 3000;
const path = require("path")
const cars = ['audi', 'opel', 'francuz', 'duży fiat', 'mercedes', 'małe fajne autko']
app.use(express.urlencoded({
  extended: true
}));

app.listen(PORT, function () {
  console.log("start serwera na porcie " + PORT)
})
app.get("/", function (req, res) {
  res.send(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  
  <body>
    <form action="/handleForm" method="post">
      <table>
        <tr>
          <td></td>
          <td>nowe</td>
          <td>uzywnae</td>
          <td>powypadkowe</td>
        </tr>
        <tr>
          <td>${cars[0]}</td>
          <td><input type="radio" name="1" value="nowe"></td>
          <td><input type="radio" name="1" value="uzywane"></td>
          <td><input type="radio" name="1" value="powypadkowe"></td>
        </tr>
        <tr>
          <td>${cars[1]}</td>
          <td><input type="radio" name="2" value="nowe"></td>
          <td><input type="radio" name="2" value="uzywane"></td>
          <td><input type="radio" name="2" value="powypadkowe"></td>
        </tr>
        <tr>
          <td>${cars[2]}</td>
          <td><input type="radio" name="3" value="nowe"></td>
          <td><input type="radio" name="3" value="uzywane"></td>
          <td><input type="radio" name="3" value="powypadkowe"></td>
        </tr>
        <tr>
          <td>${cars[3]}</td>
          <td><input type="radio" name="4" value="nowe"></td>
          <td><input type="radio" name="4" value="uzywane"></td>
          <td><input type="radio" name="4" value="powypadkowe"></td>
        </tr>
        <tr>
          <td>${cars[4]}</td>
          <td><input type="radio" name="5" value="nowe"></td>
          <td><input type="radio" name="5" value="uzywane"></td>
          <td><input type="radio" name="5" value="powypadkowe"></td>
        </tr>
        <tr>
          <td>${cars[5]}</td>
          <td><input type="radio" name="6" value="nowe"></td>
          <td><input type="radio" name="6" value="uzywane"></td>
          <td><input type="radio" name="6" value="powypadkowe"></td>
        </tr>
        <tr>
          <td><button type="submit">send</button></td>
        </tr>
      </table>
    </form>
  </body>
  
  </html>`)
})
app.post('/handleForm', function (req, res) {
  res.send(req.body)
});
