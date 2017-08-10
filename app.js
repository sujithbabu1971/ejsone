var exp = require("express");
var chalk = require("chalk");

var app = new exp();

var port = process.env.PORT||4000;
// This folder is the one from the static files are served. 
// By default, the index.html is the index file
app.use(exp.static(__dirname+ "/public"));
// Setting the template  view engine
// By default it seems to be ejs anyway
// Refer template engine section in https://github.com/expressjs/express/wiki
// for all available template engines.

app.set("view engine", "ejs");

app.listen(port, listenFn);

// . is neede for relative path to the current folder.
var routers = require("./routes/routes.js");

function listenFn() {

	console.log("Server is running on port "+port);
}

app.get("/home", routers.homeFn);
app.get("/city/:city", routers.cityFn);
// For those mateche with any URL
app.use(function(req, res) {
	console.log(chalk.red("Error: 404 for path "+req.path));
    res.status(404).render('404',{"path":req.path});
});

app.use(function(error, req, res, next) {
    console.log(chalk.red('Error : 500'+error))
    res.status(500).render('500',{error:error});
});

