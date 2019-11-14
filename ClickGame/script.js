var $start = document.querySelector('#start');
var $game = document.querySelector('#game');
var $time = document.querySelector('#time');
var $result = document.querySelector('#result');
var $timeHeader = document.querySelector('#time-header');
var $resultHeader = document.querySelector('#result-header');
var $input = document.querySelector('#game-time');

var score = 0;
var isGameStarted = false;

$start.addEventListener('click', startGame)
$game.addEventListener('click', handleBlockClick)
$input.addEventListener('input', setGameTime);



function startGame() {
  isGameStarted = true;
  score = 0;
  setGameTime()
  $input.setAttribute('disabled', 'true')
  $start.classList.add('hide');
  $timeHeader.classList.remove('hide');
  hide($resultHeader)
  $game.style.backgroundColor = '#fff';

var interval = setInterval(function () {
  var time = parseFloat($time.textContent);

  if (time <= 0){
    clearInterval(interval);
    endGame();
  }
  else {
    $time.textContent = (time - 0.1).toFixed(1);
  }
}, 100);

  renderBox();
}

function setGameScore() {
  $result.textContent = score.toString();
}

function setGameTime() {
  var time = +$input.value;
  $time.textContent = time.toFixed(1);
}

function endGame() {
  isGameStarted = false;
  $input.setAttribute('disabled', 'false')
  show($start)
  $game.style.backgroundColor = '#acacac';
  $game.innerHTML = '';
  hide($timeHeader)
  show($resultHeader)
  setGameScore();
}


function handleBlockClick(event) {
  if (isGameStarted) {
    if (event.target.dataset.box) {
      score++;
      renderBox();
    }
  }
  else {
    return
  }

}

function renderBox() {
  $game.innerHTML = '';
  var box = document.createElement('div');
  var boxSize = rand(30, 120);
  var gameSize = $game.getBoundingClientRect()
  var maxTop = gameSize.height - boxSize;
  var maxLeft = gameSize.width - boxSize;
  var blockColor = setColor(0, 254);

  box.style.height = box.style.width = boxSize + 'px';
  box.style.position = 'absolute';
  box.style.backgroundColor = '#' + blockColor;
  box.style.top = rand(0, maxTop) + 'px';
  box.style.left = rand(0, maxLeft) + 'px';
  box.style.cursor = 'pointer';

  box.setAttribute('data-box', 'true');
  $game.insertAdjacentElement('afterbegin', box);
}

function rand(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function show($el) {
  $el.classList.remove('hide');
}

function hide($el) {
  $el.classList.add('hide');
}

function setColor(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}
