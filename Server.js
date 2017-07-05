var app = require('http');  
//var app = express();  
  
//app.use(express.static("App"));  
  
app.createServer( function (req, response) {  
    response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "Hello World"
   response.end('Hello World\n');
}).listen(8083);  
console.log("MyProject Server is Listening on port 8080");  