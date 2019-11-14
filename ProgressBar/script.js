var element = document.querySelector('#myBar');
var btn = document.querySelector('#btn-start');

btn.addEventListener('click', start)

function start() {
  var width = 10;
  var id = setInterval(frame, 1);
  function frame() {
    if (width>=100) {
      clearInterval(id);
    }
    else {
      width++;
      element.style.width = width + '%';
      document.querySelector('#label').innerHTML = width*1 + '%';
    }
  }
}
