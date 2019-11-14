var modal = document.querySelector('#myModal');
var img = document.querySelector('.myPhoto');
var modalImg = document.querySelector('#img01');
var caption = document.querySelector('#caption');

img.addEventListener('click', clickImg);

function clickImg() {
  img.style.display = 'none'
  modal.style.display = 'block';
  modalImg.src = this.src;
  caption.innerHTML = this.alt;
}

var span = document.querySelector('.close');
span.addEventListener('click', closeClick);

function closeClick() {
  modal.style.display = 'none';
  img.style.display = 'block';
}
