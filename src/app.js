const express = require("express");
const knexfile = require("../knexfile");
const { createItem, getItems } = require("./itemsController");
const app = express();
const listsController = require("./listsController");
const itemsController = require("./itemsController");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello");
});

//create list
app.post("/api/list", listsController.create);

//get list
app.get("/api/list", listsController.get);

//create item
app.post("/api/item", itemsController.create);

//get item
app.get("/api/item/:listid", itemsController.get);

module.exports = app;