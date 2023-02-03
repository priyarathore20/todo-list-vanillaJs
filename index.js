//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

// event listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption?.addEventListener('click', filtertodo);

//functions
function addTodo(event) {
  console.log(event);
  event.preventDefault();
  //Create a new div
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  //Create li
  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);
  //Check Mark Button
  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fa-solid fa-check"></i>';
  completedButton.classList.add('complete-btn');
  todoDiv.appendChild(completedButton);
  //Check trash Button
  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
  trashButton.classList.add('trash-btn');
  todoDiv.appendChild(trashButton);
  todoList.appendChild(todoDiv);
  //Clear todo Input
  todoInput.value = '';
}

function deleteCheck(e) {
  const item = e.target;
  console.log(item);
  // Delete todo
  if (item.classList[0] === 'trash-btn') {
    const todo = item.parentElement;
    todo.classList.add('fall');
    addEventListener('transitionend', function () {
      todo.remove();
    });
  }
  if (item.classList[0] === 'complete-btn') {
    const todo = item.parentElement;
    todo.classList.toggle('completed');
  }
}

function filtertodo(e) {
  const todos = todoList.childNodes;
}
