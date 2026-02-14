const express = require("express");
const app = express();
const cors = require("cors");
const listsController = require("./listsController");
const itemsController = require("./itemsController");

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  // リクエストログ
  console.log(`[Request] ${req.method} ${req.originalUrl}`);
  if (Object.keys(req.body || {}).length > 0) {
    console.log(`[Request Body]`, JSON.stringify(req.body));
  }

  // レスポンスをキャプチャするため res.json を上書き
  const originalJson = res.json.bind(res);
  res.json = (body) => {
    console.log(`[Response] ${res.statusCode} ${req.method} ${req.originalUrl}`);
    console.log(`[Response Body]`, JSON.stringify(body));
    return originalJson(body);
  };

  next();
});

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

//edit item
app.patch("/api/item", itemsController.edit);

//delete item
app.delete("/api/item/:itemid", itemsController.delete);

module.exports = app;