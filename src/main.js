import { getTodos, addTodo, toggleTodo, deleteTodo } from './services/todoService.js';
import { createTodoElement } from './utils/domUtils.js';

const todoForm = document.getElementById('todoForm');
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');
const errorDiv = document.getElementById('error');

async function loadTodos() {
  try {
    const todos = await getTodos();
    todoList.innerHTML = '';
    todos.forEach(todo => {
      const todoElement = createTodoElement(
        todo,
        handleToggleTodo,
        handleDeleteTodo
      );
      todoList.appendChild(todoElement);
    });
  } catch (error) {
    showError(error.message);
  }
}

async function handleAddTodo(e) {
  e.preventDefault();
  const task = todoInput.value.trim();
  
  if (!task) return;
  
  try {
    await addTodo(task);
    todoInput.value = '';
    await loadTodos();
  } catch (error) {
    showError(error.message);
  }
}

async function handleToggleTodo(id, completed) {
  try {
    await toggleTodo(id, completed);
    await loadTodos();
  } catch (error) {
    showError(error.message);
  }
}

async function handleDeleteTodo(id) {
  try {
    await deleteTodo(id);
    await loadTodos();
  } catch (error) {
    showError(error.message);
  }
}

function showError(message) {
  errorDiv.textContent = message;
  setTimeout(() => {
    errorDiv.textContent = '';
  }, 3000);
}

todoForm.addEventListener('submit', handleAddTodo);

// Initial load
loadTodos();