var inp = document.querySelector(".taskname");
var list = document.querySelector(".tasklist");
var addTask = document.querySelector(".btnTask");
var taskClear = document.querySelector(".btnClear");
var taskList = [];
var today = new Date();
var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
document.getElementById("date").innerHTML=date;

function render(elements) {
  list.innerHTML = "";
  elements.forEach(e => {
    let newEl = document.createElement("li");
    newEl.innerHTML = e;
    newEl.classList.add("list-group-item");
    list.appendChild(newEl);
  });
}

addTask.addEventListener("click", e => {
  if (inp.value !== "") {
    taskList.push(inp.value);
    inp.value = "";
    render(taskList);
    taskClear.style.display = "block";
    localStorage.setItem("mylist", JSON.stringify(taskList));
  } else {
    alert("Please enter the task then press the button");
  }
});

let saved = localStorage.getItem("mylist");
if (saved) {
  taskList = JSON.parse(localStorage.getItem("mylist"));
  render(taskList);
} else {
  taskClear.style.display = "none";
}
taskClear.addEventListener("click", function() {
  localStorage.clear();
  list.innerHTML = "";
  taskList = [];
  taskClear.style.display = "none";
});
