var http = require('http')
var fs = require('fs')


var server = http.createServer(function(req, res){
  try{
    var fileContent = fs.readFileSync(__dirname + '/static' + req.url)
    console.log('filePath: ', __dirname + '/static' + req.url)
    console.log('Req-Url: ', req.url)
    res.write(fileContent)
  }catch(err){
    res.writeHead(404, 'not found')
  }
  res.end()
})

server.listen(8080)
console.log('visit http://localhost:8080' )



