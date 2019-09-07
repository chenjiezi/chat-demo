// 登录
$('#login').click(function () {
  var nickname = $('#nickname').val()
  if (nickname.trim()) {
    if (nickname.length > 8) {
      alert('昵称长度不得大于8');
      return false;
    }
    $('#layer').hide()
    console.log(nickname)
  } else {
    alert('给个昵称~');
  }
})