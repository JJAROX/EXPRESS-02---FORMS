const { log } = require("console");
const express = require("express")
const app = express()
const PORT = 3000;
const path = require("path")
let users = [
  { nick: "111", email: "111@w.pl" },
  { nick: "222", email: "222@w.pl" },
  { nick: "333", email: "333@w.pl" }
]


app.use(express.urlencoded({
  extended: true
}));
app.use(express.static('static'))
app.listen(PORT, function () {
  console.log("start serwera na porcie " + PORT)
})
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/static/addUser.html"))
})
app.post("/handleForm", function (req, res) {
  let emailForm = req.body.email
  let nickForm = req.body.nick
  const newUser = {
    nick: nickForm,
    email: emailForm,
  };
  users.push(newUser);
  console.log(users);
  res.sendFile(path.join(__dirname, "/static/addUser.html"))
})
app.get("/remoweUserBySelect", function (req, res) {
  res.send(`<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <select name="select">
    <option value="1">111@wp.pl</option>
    <option value="2">222@wp.pl</option>
    <option value="3">333@wp.pl</option>
    <option value="4">444@wp.pl</option>
    <option value="5">555@wp.pl</option>
  </select>
  <br><br>
  <button type="submit">usun</button>
</body>

</html>`)
})
