const express = require('express');
const app = express();
var path = require('path');

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, '/assets')));

/* app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, "/index.html"));
}); */

app.get('/', function(req, res) {
	res.render('index');
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, function() {
	console.log("Server has started...")
});