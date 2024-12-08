export function createTodoElement(todo, onToggle, onDelete) {
  const li = document.createElement('li');
  li.className = `todo-item ${todo.completed ? 'completed' : ''}`;
  
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = todo.completed;
  checkbox.addEventListener('change', () => onToggle(todo.id, checkbox.checked));
  
  const text = document.createElement('span');
  text.textContent = todo.task;
  
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '×';
  deleteBtn.className = 'delete-btn';
  deleteBtn.addEventListener('click', () => onDelete(todo.id));
  
  li.appendChild(checkbox);
  li.appendChild(text);
  li.appendChild(deleteBtn);
  
  return li;
}