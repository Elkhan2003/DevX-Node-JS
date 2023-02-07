const express = require("express");
const app = express();
const port = 3000;
const products = { product1: "chromebook" };
app.get("/", (req, res) => res.send("This is the root endpoint, and it is useless!"));
app.get("/products", (req, res) => res.send("products"));
app.listen(port, () => console.log("Express is listening on port: ", port));
