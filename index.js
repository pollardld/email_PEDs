var	express = require("express"),
	swig = require("swig"),
	juice = require("juice"),
	app = express();

app.get('/', function(req, res){

  	juice( 'email.html', function(err, html) {
  		if (err) throw err;

  		res.send(html);
	});
});

app.listen(3000);