const db = require('./repository');
const bodyParser = require('body-parser')
const express = require("express");
const app = express();

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get("/users", db.getUsers);
app.post("/users", db.createUser);

app.listen(3000, function(){
    console.log("App rodando na porta 3000");
});