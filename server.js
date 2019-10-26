const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const htmlRoutes = require("./routing/htmlRoutes.js");
const apiRoutes = require("./routing/apiRoutes.js");

app.use(htmlRoutes, apiRoutes);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});