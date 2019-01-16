'use strict';

module.exports = function(app) {  
	var jsonData = require('./data');
  //var uploadData =this.require('./upload');

  // var multer = require('multer');
  // var storage = multer.diskStorage({
  //   destination: function (req, file, cb) {
  //     cb(null, './public/photos')
  //   },
  //   filename: function (req, file, cb) {
  //     cb(null, file.fieldname + '-' + Date.now())
  //   }
  // })
   
  // var upload = multer({ storage: storage })
  app.route('/')
  .get(function(req,res){
    res.json({"status":"ok"});
  });
  //to fetch data directly
	app.route('/api/data/:name')
		.get(function(req,res){
      
      res.json(jsonData[req.params.name]);
    });
    
};  

function sleep(millis) {
  return new Promise(resolve => setTimeout(resolve, millis));
}

