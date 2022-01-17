const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const search = document.querySelector(".search input");

const TodoTemplate = (todo) => {
  const htmlT = `
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>`;

  list.innerHTML += htmlT;
};

const filterTodos = (word) => {
  // hide unmatched text
  Array.from(list.children)
    .filter((item) => {
      return !item.textContent.toLowerCase().includes(word);
    })
    .forEach((item) => {
      item.classList.add("filtered");
    });

  // reverse
  Array.from(list.children)
    .filter((item) => {
      return item.textContent.toLowerCase().includes(word);
    })
    .forEach((item) => {
      item.classList.remove("filtered");
    });
};

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // trim whitespaces from 'add' value.
  const todo = addForm.add.value.trim();
  if (todo.length > 1) {
    // avoid empty input values.
    TodoTemplate(todo);
    addForm.reset();
  }
});

// delete todos. (Event delegations.)
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

// search Todos.
search.addEventListener("keyUp", (e) => {
  const searchWord = search.value.trim().toLowerCase();
  filterTodos(searchWord);
});
