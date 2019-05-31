var http = require('http')
var path = require('path')
var url = require('url')
var fs = require('fs')

function staticRoot(staticPath, req, res) {
  console.log('StaticPath: ',staticPath)
  console.log('Req-Url: ', req.url)
  var pathObj = url.parse(req.url, true)
  console.log('Path-Obj: ', pathObj)

  var filePath = path.join(staticPath, pathObj.pathname)
  // filePat每一个文档(index.js xx.css )的绝对路径
  // console.log('File-Path: ', filePath )
  fs.readFile(filePath, 'binary', function(err, fileContent) {
    if(err) {
      console.log('Status Err: ','404')
      res.writeHead(404, 'Not Found')
      res.end('<h1>404 Not Found</h1>')

    }else{
      console.log('Status Cor: ','200')
      res.writeHead(200, 'OK')
      res.write(fileContent,'binary')
      res.end()
    }
  })
}

var server = http.createServer(function(req, res) {
  res.setHeader('Content-Type', 'text/html; charset= utf-8')
  staticRoot(path.join(__dirname, 'static'), req, res)
})
console.log('Path: ',path.join(__dirname, 'static'))
server.listen(8080)
console.log('visit http://localhost:8080' )





