//GET - Return all registers
exports.testJson = function(req, res) {
		
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host: "54.233.92.101",
  user: "wsgruhpod_virtual",
  password: "*Yesidmt91",
  database: "wsgrupod_virtualDJDB"
});

connection.connect(function(err) {
     console.error('conectando');
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});


connection.end();

 
};


exports.socket = function(req,res){
	res.json({ "str_nombres":  "dsd"});
};


// host: "54.233.92.101",
//  user: "wsgruhpod_virtual",
//  password: "*Yesidmt91",
//  database: "wsgrupod_virtualDJDB"