var input = document.querySelector('#myInput');

input.addEventListener('keyup', searchKey);

function searchKey() {
  var a, ul, li, i, filter;
  filter = input.value.toUpperCase();
  ul = document.querySelector('#myUl');
  li = ul.getElementsByTagName('li');

  for (var i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName('a')[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = '';
    }
    else {
      li[i].style.display = 'none';
    }
  }
}
