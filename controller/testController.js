//GET - Return all registers
exports.testJson = function(req, res) {
		
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host: "31.220.104.1",
  user: "u611574828_root",
  password: "desarrollo2016",
  database: "u611574828_vet"
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});

connection.query('SELECT * FROM w001_usuarios', function (error, results, fields) {
  if (error) throw error;
  console.log('str_nombres: ', results[0].str_nombres);
  
  
   res.json({ "str_nombres":  results[0].str_nombres });

});

connection.end();

 
};


exports.socket = function(req,res){
	res.json({ "str_nombres":  "dsd"});
};