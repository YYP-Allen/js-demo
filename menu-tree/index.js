function $(selector) {
  return document.querySelector(selector)
}
tree = $('#tree')
// 给存在的文档节点添加<span></sapn>
let liNodeList = tree.querySelectorAll('li')
for (let li of liNodeList) {
  let span = document.createElement('span')
  // parentNode.prepend()而不是append()
  li.prepend(span)
  let text = span.nextSibling  //每个li中的文本
  span.append(text)

}
// 绑定事件
tree.onclick = function (e) {
  var childUl =  e.target.parentNode.querySelector('ul')
  if (!childUl) return

  childUl.hidden = !childUl.hidden
  // 一直循环判断，
  // console.log(!childUl.hidden)
}