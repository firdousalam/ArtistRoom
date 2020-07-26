
var express = require('express')
  , user = require('./routes/user')
  , upload = require('./routes/upload')
  , http = require('http')
  , Busboy = require('busboy')
  , fs = require('fs')
  , path = require('path');
  var app = express();
  const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
 
 
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
//var methodOverride = require('method-override');

var mysql      = require('mysql');
var bodyParser=require("body-parser");
var connection = mysql.createConnection({
              host     : 'localhost',
              user     : 'root',
              password : '',
              database : 'Artisroom'
            });
 
connection.connect();
 
global.db = connection;
 
// all environments
app.set('port', process.env.PORT || 8080);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="upload/fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
})


app.use("/user", user);
app.use("/upload", upload);
 
//Middleware
app.listen(8080)
