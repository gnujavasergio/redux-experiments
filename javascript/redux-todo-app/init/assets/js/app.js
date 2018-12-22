(function () {

  const initialState = [
    {
      id: 1,
      completed: true,
      text: 'Task 1'
    },
    {
      id: 2,
      completed: false,
      text: 'Task 2'
    },
    {
      id: 3,
      completed: true,
      text: 'Task 3'
    }
  ];

  document.addEventListener("DOMContentLoaded", (event) => {
    initApp();
  });

  function initApp(){
    renderTodos(initialState);
  }

  function renderTodos(todos){
    const $container = document.getElementById('todo-list');
    $container.innerHTML = '';

    let todosHtml = '';
    todos.forEach(todo => {
      todosHtml += renderTodo(todo);      
    });
    $container.innerHTML = todosHtml;
  }

  function renderTodo(todo) {
    return `
    <li data-id="${todo.id}" class="${todo.completed}">
      <div class="view">
        <input class="toggle" type="checkbox" ${todo.completed ? 'checked' : ''}>
        <label>${todo.text}</label>
        <button class="destroy"></button>
      </div>
    </li>`;
  }

})();