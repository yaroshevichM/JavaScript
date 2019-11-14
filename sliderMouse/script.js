var slider = document.querySelector('.bg--line');
var point = document.querySelector('.point');

point.onmousedown = function (e) {
  var pointCoords = getCoords(point);
  var shiftX = e.pageX - pointCoords.left;

  var sliderCoords = getCoords(slider);

  document.onmousemove = function(e) {
    var newLeft = e.pageX - shiftX - sliderCoords.left;

    if (newLeft < 0) {
      newLeft = 0;
    }

    var rightEdge = slider.offsetWidth - point.offsetWidth;
    if (newLeft > rightEdge) {
      newLeft = rightEdge;
    }

    point.style.left = newLeft + 'px';
  }

  document.onmouseup = function () {
    document.onmousemove = document.onmouseup = 0;
  };

  return false;
};

point.ondragstart = function () {
  return false;
};
function getCoords(elem) { // кроме IE8-
    var box = elem.getBoundingClientRect();
    return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
}
