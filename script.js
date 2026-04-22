const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const searchInput = document.getElementById("searchInput");

// TAMBAH TUGAS
addTaskBtn.addEventListener("click", function () {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Tugas tidak boleh kosong!");
    return;
  }

  const li = document.createElement("li");
  li.className = "list-group-item d-flex justify-content-between align-items-center";

  const span = document.createElement("span");
  span.textContent = taskText;

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.className = "btn btn-warning btn-sm me-2";

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Hapus";
  deleteBtn.className = "btn btn-danger btn-sm";

  const btnGroup = document.createElement("div");
  btnGroup.appendChild(editBtn);
  btnGroup.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(btnGroup);

  taskList.appendChild(li);

  taskInput.value = "";

  // HAPUS TASK
  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  // EDIT TASK
  editBtn.addEventListener("click", function () {
    const newTask = prompt("Edit tugas:", span.textContent);

    if (newTask !== null && newTask.trim() !== "") {
      span.textContent = newTask.trim();
    }
  });
});

// SEARCH / FILTER
searchInput.addEventListener("keyup", function () {
  const keyword = searchInput.value.toLowerCase();
  const tasks = document.querySelectorAll("#taskList li");

  tasks.forEach(function (task) {
    const taskText = task.querySelector("span").textContent.toLowerCase();

    if (taskText.includes(keyword)) {
      task.style.display = "flex";
    } else {
      task.style.display = "none";
    }
  });
});

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const searchInput = document.getElementById("searchInput");

// CEK DULU ADA ATAU TIDAK (biar tidak error di halaman lain)
if (taskInput && addTaskBtn && taskList && searchInput) {

  // TAMBAH TUGAS
  addTaskBtn.addEventListener("click", function () {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
      alert("Tugas tidak boleh kosong!");
      return;
    }

    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";

    const span = document.createElement("span");
    span.textContent = taskText;

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "btn btn-warning btn-sm me-2";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Hapus";
    deleteBtn.className = "btn btn-danger btn-sm";

    const btnGroup = document.createElement("div");
    btnGroup.appendChild(editBtn);
    btnGroup.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(btnGroup);

    taskList.appendChild(li);

    taskInput.value = "";

    // HAPUS
    deleteBtn.addEventListener("click", function () {
      li.remove();
    });

    // EDIT
    editBtn.addEventListener("click", function () {
      const newTask = prompt("Edit tugas:", span.textContent);

      if (newTask !== null && newTask.trim() !== "") {
        span.textContent = newTask.trim();
      }
    });
  });

  // SEARCH / FILTER
  searchInput.addEventListener("keyup", function () {
    const keyword = searchInput.value.toLowerCase();
    const tasks = document.querySelectorAll("#taskList li");

    tasks.forEach(function (task) {
      const taskText = task.querySelector("span").textContent.toLowerCase();

      if (taskText.includes(keyword)) {
        task.style.display = "flex";
      } else {
        task.style.display = "none";
      }
    });
  });

}