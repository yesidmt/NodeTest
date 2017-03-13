
//exports
exports.getDateServer = function(req,res){
   res.json({ "hour":  getDateTime()});
};

//exports
exports.postLogin = function (req,res){
    
  // console.log(req.body);
   var vars =({
		username:    req.body.username,
		password:    req.body.password
		
	});
  
  
      res.status(200).jsonp(vars); 
  
    
};









//Metodos

function getDateTime() {

    var date = new Date();

    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;

    var min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;

    var sec  = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;

    var year = date.getFullYear();

    var month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;

    var day  = date.getDate();
    day = (day < 10 ? "0" : "") + day;

    return year + ":" + month + ":" + day + ":" + hour + ":" + min + ":" + sec;

}