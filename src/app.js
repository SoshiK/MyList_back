const express = require("express");
const app = express();
const cors = require("cors");
const listsController = require("./listsController");
const itemsController = require("./itemsController");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello");
});

//create list
app.post("/api/list", listsController.create);

//get list
app.get("/api/list", listsController.get);

//edit list
app.patch("/api/list", listsController.edit);

//create item
app.post("/api/item", itemsController.create);

//get item
app.get("/api/item/:listid", itemsController.get);

//delete item
app.delete("/api/item/:itemid", itemsController.delete);

module.exports = app;