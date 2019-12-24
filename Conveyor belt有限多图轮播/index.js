function $(selector) {
  return document.querySelector(selector)
}
let showCount = 3  // show number
let width = 130    // img witdth
let listPics = $('#box').querySelector('ul')
let listElems = box.querySelectorAll('li')
var length = 0
$('.next').onclick = function () {
  // 点击右移
  // 每一次的margin-left值，就是相当于在 css中给容器设定margin-left,所以每次的值，都会改变。如没改变，就是覆盖之前的属性
  length -= width * showCount 
  length = Math.max(length, -width * (listElems.length - showCount));
    console.log(length)

  listPics.style.marginLeft = length + 'px';
}

$('.prev').onclick = function () {
  // 点击左移
  // margin-left的值是在next的基础上

  console.log('Length-next' + length)//,打印next移动的length的值
  length += width * showCount 
  length = Math.min(length, 0)
  listPics.style.marginLeft = length + 'px'
  console.log(length)
}


