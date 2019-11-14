let search = document.querySelector('.search');
let items = document.querySelectorAll('.list li');

search.oninput = function(){
  let value = search.value.trim();
  if (value != '') {
    items.forEach(function (elem){
      if (elem.innerHTML.search(value) == -1) {
        elem.classList.add('hide');
      }
      else{
        elem.classList.remove('hide');
      }
    });
  }
  else{
    items.forEach(function (elem){
        elem.classList.remove('hide');
      });
  }
}
