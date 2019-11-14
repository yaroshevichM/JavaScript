const button = document.querySelector('.start_button');
const moveBlock = document.querySelector('.daught_block');
let pos = 0;
window.onload = function() {
  button.addEventListener('click', move);
}

function move() {
  let interval = setInterval(run, 10);

  function run() {
    if (pos == 250) {
      clearInterval(interval);
      return
    }
    else{
      pos++;
      moveBlock.style.top = pos + 'px';
      moveBlock.style.left = pos + 'px';
    }
  }

}
