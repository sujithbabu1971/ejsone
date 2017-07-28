var exp = require("express");
var app = new exp();

var port = process.env.PORT||4000;
// This folder is the one from the static files are served. 
// By default, the index.html is the index file
app.use(exp.static(__dirname+ "/public"));
// Setting the template engine
app.set("view engine", exp);
app.listen(port, listenFn);

// . is neede for relative path to the current folder.
var routers = require("./routes/routes.js");

function listenFn() {

	console.log("Server is running on port "+port);
}

app.get("/home", routers.homeFn);
app.get("/city/:city", routers.cityFn);

