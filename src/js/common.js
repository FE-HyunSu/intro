// get Pram
export function getParameterByName(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  let regex = new RegExp('[\\?&]' + name + '=([^&#]*)'),
    results = regex.exec(window.location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// cookie set, get, delete
export function setCookie(key, value, expiredays) {
  var todayDate = new Date();
  todayDate.setDate(todayDate.getDate() + expiredays);
  document.cookie = key + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + ";"
}

export function getCookie(key) {
  var result = null;
  var cookie = document.cookie.split(';');
  cookie.some(function (item) {
    // 공백을 제거
    item = item.replace(' ', '');

    var dic = item.split('=');

    if (key === dic[0]) {
      result = unescape(dic[1]);
      return true; // break;
    }
  });
  return result;
}

export function deleteCookie(name) {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

export function windowHeightFull() {
  document.querySelector('main').style.height = window.innerHeight + 'px';
}