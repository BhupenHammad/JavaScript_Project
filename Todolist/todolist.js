const todoform = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector(".todo-list");

todoform.addEventListener("submit",(e)=>{
    e.preventDefault();
    const newtodoText = todoInput.value;
    const newLi = document.createElement("li");
    const newInnerhtml = `
    <span class="text">${newtodoText}</span>
    <div class="todo-buttons">
      <button class="todo-btn done">Done</button>
      <button class="todo-btn remove">Remove</button>
    </div>`
  newLi.innerHTML = newInnerhtml;
  todoList.append(newLi);
   todoInput.value = " ";
})

todoList.addEventListener("click",(e)=>{
    if(e.target.classList.contains("remove")){
        const liremove = e.target.parentNode.parentNode;
        liremove.remove();
    }
    if(e.target.classList.contains("done")){
        const lispan = e.target.parentNode.previousElementSibling;
        lispan.style.textDecoration = "line-through";
    }
})