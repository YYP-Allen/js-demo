let tooltipDiv
document.onmouseover = function (e) {
  tooltipDiv = document.createElement('div')
  tooltipDiv.className = 'tooltip'
  tooltipDiv.innerHTML = e.target.dataset.tooltip
  document.body.append(tooltipDiv)
  
  // 通过getBoundingClientRect()获取，e.target相对左上角位置
  let rect = e.target.getBoundingClientRect()
  
  // tooltip相对位置确定计算,tooltip相对document 做left top移动
  let left = rect.left + (e.target.offsetWidth - tooltipDiv.offsetWidth)/2
  // 确定left的值,tooltip相对位置不能超过左边界
  if (left < 0) left = 0

  let top = rect.top - tooltipDiv.offsetHeight - 10
  if (top < 0) {
    top = rect.top  + e.target.offsetHeight + 10
    // 确定top的值，tooltip相对位置必须在滚动的窗口范围内部
  }
   // 做left top 偏移
   tooltipDiv.style.left = left + 'px'
   tooltipDiv.style.top = top + 'px'
}

document.onmouseout = function (e) {
  if (tooltipDiv) {
    tooltipDiv.remove()
    tooltipDiv = null
  }
}