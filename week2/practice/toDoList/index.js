// 요소 선택
const input = document.querySelector('.todo-input');
const button = document.querySelector(".add-btn");
const todoList = document.querySelector(".todo-list");

// 로컬스토리지
let todos = JSON.parse(localStorage.getItem('todos')) || [];

todos.forEach((todo) => {
    const li = document.createElement('li');
    li.textContent = todo;
    todoList.appendChild(li);
});

const buttonClick = () => {
    const value = input.value;

    if (!value) return;

    const text = document.querySelector('.todo-input').value;

    const li = document.createElement('li');
    todoList.appendChild(li);
    li.textContent = text;

    todos.push(text);
    localStorage.setItem('todos', JSON.stringify(todos));

    input.value = '';
}


button.addEventListener('click', buttonClick);