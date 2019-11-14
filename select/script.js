function fun1() {

  var sel = document.getElementById('mySelect').selectedIndex;
  var options = document.getElementById('mySelect').options;
  alert('Выбрана опция ' +options[sel].text);
}

function fun2() {
  var rng = document.getElementById('myRange');
  var p = document.getElementById('pRange');
  p.innerHTML = rng.value;
}
