const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const Item = require("./models/Item");

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));


const mongoUrlFromLocalhost = "mongodb://localhost:27018/my-db";
const mongoUrlFromContainer = "mongodb://mongodb-service:27017/my-db";


mongoose
  .connect(mongoUrlFromContainer, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World - Le bon developpeur... ");
});


app.get("/items", (req, res) => {
  Item.find()
    .then((items) => res.send({ items }))
    .catch((err) => res.status(500).json({ err }));
});

app.post("/items/add", (req, res) => {
  const newItem = new Item({
    name: req.body.name,
  });

  newItem
    .save()
    .then((item) => res.send({ message: "item saved successfully", item }))
    .catch((err) => res.status(500).json({ err }));
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
