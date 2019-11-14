const tab = document.querySelectorAll('.tab');
const contentTab = document.querySelectorAll('.tab_content');
const tabs = document.getElementById('tabs');
hideContent(1);

window.onload = function() {
  tabs.addEventListener('click', tabsClick);
}

function tabsClick(event) {
  target = event.target;
  if (target.className == 'tab') {
    for (var i = 0; i < tab.length; i++) {
      if (target == tab[i]) {
        showContent(i);
        break;
      }
    }
  }
}

function showContent(a) {
  if (contentTab[a].classList.contains('hide')) {
    hideContent(0);
    tab[a].classList.add('whiteborder');
    contentTab[a].classList.remove('hide');
    contentTab[a].classList.add('show');
  }
}

function hideContent(b) {
  for (var i = b; i < contentTab.length; i++) {
    contentTab[i].classList.remove('show');
    contentTab[i].classList.add('hide');
    tab[i].classList.remove('whiteborder');
  }
}
