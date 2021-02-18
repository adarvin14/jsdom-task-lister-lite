document.addEventListener("DOMContentLoaded", () => {
  // your code here
  addEventListeners()
});

function addEventListeners() {
  const taskSubmit = document.getElementById("create-task-form")
  taskSubmit.addEventListener('submit', handleSubmit)
}

function handleSubmit(e) {
  e.preventDefault()
  const input = e.target.querySelector("#new-task-description")
  const inputValue = input.value
  const li = document.createElement('li')
  li.textContent = inputValue
  const task = document.querySelector("#tasks")
  task.appendChild(li)
  e.target.querySelector("#new-task-description").value = ""
}