var http = require('http') 
var path = require('path')
var url = require('url')
var fs = require('fs')


var server = http.createServer(function(req, res){
  // 返回的URL对象的query属性会是一个使用querystring模块的parse()生成的对象
  var pathObj = url.parse(req.url, true)
  // pathObj.pathname 相当于document.location.pathname
  // console.log('Path-Name: ',pathObj.pathname)
  switch (pathObj.pathname) {
    case '/getData':
      var PlayerData = [
        "姓名：库里",
        "场均出场时间：36分钟",
        "场均得分：32.5",
        "有效命中率：61%"
        ] 
      
      // 下面的代码就是可以让支持JSONP
      // 没有callback这个参数就直接把发送回去(响应体)
      if(pathObj.query.callback){
        // 最关键的一步
        // pathObj.query.callback.call(undefined, param)
        res.end(pathObj.query.callback + '(' + JSON.stringify(PlayerData) + ')')
      }else{
        // 没有没有callback这个参数就直接把发送回去
        res.end(JSON.stringify(PlayerData))
      }
      break;

    default:
      fs.readFile(path.join(__dirname, pathObj.pathname), function(e, fileContent){
        if(e){
          res.writeHead(404, 'not found')
          res.end('<h1>404 Not Found</h1>')
        }else{
          // 相当于res.write(fileContent); res.end()
          res.end(fileContent)
        }
      }) 
  }
})
server.listen(8080)