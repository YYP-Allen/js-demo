var toggleBtns = $('.buttons > span')

// 实现基本轮播功能
toggleBtns.each(function (index, value) {
  console.log(value)
  $(value).on('click', function (e) {
    var index = $(e.currentTarget).index()
    moveDist = index * (-300)
    $('#gallery').css({
      transform: 'translate(' + moveDist + 'px'
    })
    var n = index
    toggleBtns.eq(n).addClass('showColor')
                    .siblings('.showColor')
                    .removeClass('showColor')
  })
})

var picNumber = toggleBtns.length
var m = 0

// 实现自动播放(无限),即是实现自动点击事件
var timerId = setInterval(function() {
  m += 1
  toggleBtns.eq(m % picNumber).trigger('click')
}, 2000)

// 鼠标进入暂停轮播进程
$('#container').on('mouseenter', function() {
  window.clearInterval(timerId)
})
// 鼠标移除继续之前的轮播进程
$('#container').on('mouseleave', function() {
  timerId = setInterval(function() {
    m += 1
    toggleBtns.eq(m % picNumber).trigger('click')
  }, 2000)
})
