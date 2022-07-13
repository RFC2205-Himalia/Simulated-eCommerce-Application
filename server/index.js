require("dotenv").config();

const express = require("express");
const path = require("path");
const controller = require("./controllers.js");


const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, '../client/public')));

//define routes
app.get("/*", controller.get)
app.post("/*",controller.post)


//define port
const PORT = process.env.PORT || 3000;
app.listen(PORT);
console.log(`Server listening at http://localhost:${PORT}`);