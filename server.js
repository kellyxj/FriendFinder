const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || "localhost";

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const htmlRoutes = require("./app/routing/htmlRoutes.js");
const apiRoutes = require("./app/routing/apiRoutes.js");

app.use(htmlRoutes, apiRoutes);

app.listen(PORT, HOST, function() {
    console.log("App listening on PORT " + PORT);
});