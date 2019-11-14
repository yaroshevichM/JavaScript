const button = document.querySelector('.button_click');
const modalWindow = document.querySelector('.modal');
const modalParent = document.querySelector('.modal_parent');

window.onload = function() {
  button.addEventListener('click', openModal);
}


function openModal() {
  button.classList.remove('show');
  button.classList.add('hide');
  modalParent.classList.toggle('hide');

  modalParent.addEventListener('click', closeModal);
}

function closeModal(e){
    if(!e.target.matches('.modal')) {
        modalWindow.remove();
        modalParent.remove();
        this.removeEventListener('click', closeModal);
        button.classList.remove('hide');
        button.classList.add('show');
    }
}
