function Carousel($CS) {
  this.init($CS)
  this.bind()
  this.autoShow()
}

Carousel.prototype = {
  constructor: Carousel,
  init: function($CS) {
    this.$CS = $CS
    this.$imgBox = this.$CS.find('.imgBox')
    this.$prevBtn = this.$CS.find('.prev')
    this.$nextBtn = this.$CS.find('.next')
    this.$imgs = this.$CS.find('.imgBox > li')
    this.$pills = this.$CS.find('.pills > span')
    

    this.imgWidth = this.$imgs.width()
    this.imgCount = this.$imgs.length

    // 图片的下标
    this.index = 0
    // 添加克隆的对象
    this.$imgBox.append(this.$imgs.first().clone())
    this.$imgBox.prepend(this.$imgs.last().clone())
    
 
    this.$imgBox.width((this.imgCount + 2)*this.imgWidth)
    // 初始化位置
    this.$imgBox.css("left", -this.imgWidth)
  },
  bind: function() {
    var that = this

    this.$nextBtn.on('click', function() {
      that.showNext(1)
      console.log('下一张图片')
    })
    this.$prevBtn.on('click', function() {
      that.showPrev(1)
      console.log('上一张图片')
    })
    this.$pills.on('click', function() {
      var pillIndex = $(this).index()
      if (pillIndex > that.index) {
        that.showNext(pillIndex - that.index)
      } else {
        that.showPrev(that.index - pillIndex)
      }
      console.log('active...')
    })
    
    this.$CS.on('mouseenter', function() {
      that.stopTemp()
      console.log('mouseenter')
    })
  },
  showNext: function(quantity) {
    var that = this
    this.$imgBox.animate({left: "-="+this.imgWidth*quantity}, function() {
      that.index += quantity
      if (that.index === that.imgCount) {
        that.$imgBox.css("left", -that.imgWidth)
        that.index = 0
      }
      that.showPill()
      that.isAnimate = false
    })
  },
  showPrev: function(quantity) {
    var that = this
    this.$imgBox.animate({left: "+=" +this.imgWidth*quantity}, function() {
      that.index -= quantity
      if (that.index < 0) {
        that.$imgBox.css("left", -(that.imgWidth * that.imgCount))
        that.index = that.imgCount - 1
      }
      that.showPill()
      that.isAnimate = true
    })
  },
  showPill: function() {
    // JQuery对象才有addClass...方法,this为原生DOM对象
    this.$pills.eq(this.index).addClass('active')
                              .siblings('.active')
                              .removeClass('active')
  },
  autoShow: function() {
    var that = this 
    var timerId = setInterval(function() {
      that.showNext(1)
    }, 1500)
    return timerId
  },
  stopTemp: function() {
    var that = this
    window.clearInterval(that.autoShow())
  }
}


var SC = new Carousel($('.carousel').eq(0))

var KT = new Carousel($('.carousel').eq(1))

var cat = new Carousel($('.carousel').eq(2))