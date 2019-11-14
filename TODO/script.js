var todoList = document.querySelector('.todo_list');
document.querySelector('.todo--add').addEventListener('click', function(){
  var input = document.querySelector('.todo__input');

  if (input.value || input.value !== ' ') {
    addTodo(input);
    input.value = '';
  }
});

function addTodo(input) {
  var value = input.value;

  var elements = {
    li: document.createElement('li'),
    delete: document.createElement('a'),
    deleteIcon: document.createElement('i'),
  };

  elements.li.classList.add('list__element');
  elements.delete.classList.add('todo--delete');
  elements.delete.setAttribute('onclick', 'deleteList()')
  elements.deleteIcon.classList.add('fa');
  elements.deleteIcon.classList.add('fa-trash');

  elements.delete.appendChild(elements.deleteIcon);
  elements.li.innerHTML = elements.li.innerHTML + value;
  elements.li.appendChild(elements.delete);

  todoList.insertBefore(elements.li, todoList.firstChild);

  localStorage["list"] = todoList.innerHTML;
}


function deleteList() {
  // this.closest('li').remove();
  var task = this.event.currentTarget.parentNode;
  todoList.removeChild(task);
  localStorage["list"] = todoList.innerHTML;
}

if (localStorage["list"]) { // checking, if there is something in localstorage
  todoList.innerHTML = localStorage["list"];
}
