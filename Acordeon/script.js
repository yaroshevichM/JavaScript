var btns = document.querySelectorAll('.acord__dtn');
var contents = document.querySelectorAll('.content');


btns.forEach(function(btn, i, btns) {
  btn.addEventListener('click', function(e) {
    contents[i].classList.toggle('active');
    if (contents[i].style.maxHeight) {
      contents[i].style.maxHeight = null;
    }
    else {
      contents[i].style.maxHeight = contents[i].scrollHeight + 'px';
    }
  })
})
