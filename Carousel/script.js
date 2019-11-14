var leftArr = document.querySelector('.leftArr').addEventListener('click', left);
var rightArr = document.querySelector('.rightArr').addEventListener('click', right);
var container = document.querySelector('.container');
var lis = document.querySelectorAll('li');

var position = -402;
var width = 134;
var count = 3;

function left(){
    position = Math.min(position + width * count, 0);
    container.style.marginLeft = position + 'px';
}

function right(){
  position = Math.max(position - width * count, -width * (lis.length - count));
  container.style.marginLeft = position + 'px';
}
