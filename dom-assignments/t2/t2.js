// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here

const ul = document.querySelector('ul');

for (let todo of todoList) {
  const li = document.createElement('li');

  const input = document.createElement('input');

  input.setAttribute('type', 'checkbox');
  input.setAttribute('id', `todo-${todo.id}`);
  if (todo.completed) {
    // input.checked is not visible in elements tab in devtools
    //input.checked = 'true';
    // instead use setAttribute() method
    input.setAttribute('checked', true);
  }

  const label = document.createElement('label');

  label.htmlFor = `todo-${todo.id}`;

  // for is a reserved keyword https://www.w3schools.com/js/js_reserved.asp
  // instead we need to use htmlFor or setAttribute() method
  //label.for = `todo-${todo.id}`;
  //label.setAttribute('for', `todo-${todo.id}`);

  label.innerText = todo.task;

  li.insertAdjacentElement('beforeend', input);
  li.insertAdjacentElement('beforeend', label);

  ul.insertAdjacentElement('beforeend', li);
}
