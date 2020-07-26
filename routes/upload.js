var express = require('express');
var router = express.Router();
var Busboy = require('busboy')
var path = require('path');
var fs = require('fs');
router.post('/fileupload', function (req, res) {
	console.log("i am here now");
	 var busboy = new Busboy({ headers: req.headers });
    busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {

      var saveTo = path.join(__dirname, './uploads/' + filename);
      file.pipe(fs.createWriteStream(saveTo));
    });

    busboy.on('finish', function() {
      res.writeHead(200, { 'Connection': 'close' });
      res.end("That's all folks!");
    });

    return req.pipe(busboy);   
			
})

module.exports = router;