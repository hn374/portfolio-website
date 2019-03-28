const express = require('express');
const app = express();
var path = require('path');

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, "/index.html"));
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, function() {
	console.log("Server has started...")
});