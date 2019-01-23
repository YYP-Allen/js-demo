var http = require('http')
var path = require('path')
var fs = require('fs')
var url = require('url')


function staticRoot(staticPath, req, res){
  
  var pathObj = url.parse(req.url, true)
  console.log(pathObj)
  var delay = pathObj.query.t*1000 || 0
  // 设置一个时间参数，对相应的js文件设置 ?t=20 就是导致delay
  var filePath = path.join(staticPath, pathObj.pathname)
  

  fs.readFile(filePath, 'binary', function(err, fileContent){
    if(err){
      console.log('404')
      res.writeHead(404, 'not found')
      res.end('<h1>404 Not Found</h1>')
    }else{
      console.log('ok')
      setTimeout(function(){
        res.write(fileContent, 'binary')
        res.end()  
      }, delay)
    
    }
  })

}

var server = http.createServer(function(req, res){
  staticRoot(__dirname, req, res)
})

server.listen(8080)
console.log('visit http://localhost:8080' )

