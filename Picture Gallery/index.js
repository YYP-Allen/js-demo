// 巧妙利用dataSet的属性
function $(selector) {
  return document.querySelector(selector)
}
$('#gallery').onclick = function (e) {
	// 巧妙利用dataSet的属性,甚至不需要使用事件代理
  var id = e.target.parentNode.dataset.id
  var normalImg = document.getElementById(id)

  var Lis = normalImg.parentNode.children

  for (var i = 0; i <=Lis.length; i++) {
    if (Lis[i] === normalImg) {
       Lis[i].hidden = false
    } else {
      Lis[i].hidden = true
    }
  }
}
