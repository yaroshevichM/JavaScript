var plus = document.querySelector('.plus');
var minus = document.querySelector('.minus');
var umnoz = document.querySelector('.umnoz');
var delen = document.querySelector('.delen');

var result = document.querySelector('.result');
var res;

plus.addEventListener('click', plusDo);
minus.addEventListener('click', minusDo);
umnoz.addEventListener('click', umnozDo);
delen.addEventListener('click', delenDo);

function plusDo() {
  var num1 = document.querySelector('.num1').value;
  var num2 = document.querySelector('.num2').value;
  num1 = parseInt(num1);
  num2 = parseInt(num2);

  res = num1 + num2;

  document.querySelector('.result').innerHTML = res;
}

function minusDo() {
  var num1 = document.querySelector('.num1').value;
  var num2 = document.querySelector('.num2').value;
  num1 = parseInt(num1);
  num2 = parseInt(num2);

  res = num1 - num2;

  document.querySelector('.result').innerHTML = res;
}

function umnozDo() {
  var num1 = document.querySelector('.num1').value;
  var num2 = document.querySelector('.num2').value;
  num1 = parseInt(num1);
  num2 = parseInt(num2);

  res = num1 * num2;

  document.querySelector('.result').innerHTML = res;
}

function delenDo() {
  var num1 = document.querySelector('.num1').value;
  var num2 = document.querySelector('.num2').value;
  num1 = parseInt(num1);
  num2 = parseInt(num2);

  res = num1 / num2;

  document.querySelector('.result').innerHTML = res;
}
