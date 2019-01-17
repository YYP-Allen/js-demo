function $(selector){
  return document.querySelector(selector)
}
function $$(selector){
  return document.querySelectorAll(selector)
}

$('header .login_circle').onclick = function(e) {
  e.stopPropagation()
  $('.flip_window').style.display = 'block'
}
$('.close').onclick = function(e) {
  e.stopPropagation()
  $('.flip_window').style.display = 'none'
}

$('.flip_window').addEventListener('click', function(e){
  e.stopPropagation()
  if (e.target.classList.contains('tab_register')) {
    $('.flip_window').classList.remove('loginbar')
    $('.flip_window').classList.add('registerbar')
  }
  if (e.target.classList.contains('tab_login')) {
    $('.flip_window').classList.remove('registerbar')
    $('.flip_window').classList.add('loginbar')
  }
  console.log(e.target)
  console.log(this)
})
// 事件代理
document.addEventListener('click',function(){
  $('.flip_window').style.display = 'none'
})

$('.login form').addEventListener('submit',function(e){
  e.preventDefault()
  if(!/^\w{3,8}$/.test($('.login input[name=username]').value)) {
    $('.login .error_hint').innerText = '用户名需输入3-8个字符，包括字母数字和下划线'
    return false
  }
  if(!/^\w{6,10}$/.test($('.login input[name=password]').value)) {
    $('.login .error_hint').innerText = '密码需输入6-10个字符，包括字母数字和下划线'
    return false
  }
  this.submit()
})

$('.register form').addEventListener('submit',function(e){
  e.preventDefault()
  if (!/^\w{3,8}$/.test($('.register input[name=username]').value)) {
    $('.register .error_hint').innerText = '用户名需输入3-8个字符，包括字母数字和下划线'
    return false
  }
  if (!/^\w{6,10}$/.test($('.register input[name=password]').value)) {
    $('.register .error_hint').innerText = '密码需输入6-10个字符，包括字母数字和下划线'
    return false
  }
  if ($('.register input[name=password_confirm]').value !== $('.register input[name=password]').value) {
    $('.register .error_hint').innerText = '两次输入的密码不一致，请再次输入'
    return false
  }
  this.submit()
})