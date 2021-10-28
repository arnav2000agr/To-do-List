const button = document.querySelector('input[type="button"]');
const list = document.querySelector("ul");
const input = document.querySelector("input[type='text']");
var today = new Date();
var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
document.getElementById("date").innerHTML=date;
const newTodos = document.querySelectorAll('li');
const form = document.querySelector('form');
let newTodo;
let listItemText;
let List = [];
function add() {
    listItemText = document.createElement("span");
    listItemText.innerText = input.value;
   const checkBox = document.createElement('input');
   checkBox.type = "checkbox";
   checkBox.addEventListener('click', function(){
   if(this.checked ){ 
       listItemText.style.textDecoration = "none";
   }           
   })
   const deleteButton = document.createElement('button');
   deleteButton.innerText = "Delete";
   deleteButton.classList.add("delete");
   deleteButton.addEventListener('click', function(e){
       let li = this.parentElement;
       li.remove()
   })
   newTodo = document.createElement("li");
   newTodo.append(listItemText, checkBox, deleteButton);
   newTodo.setAttribute('data-id', "text");
   list.appendChild(newTodo);
   input.value = "";
   List.push({
    task: listItemText.innerText,
    done: false
  })
  if(!localStorage.getItem('todos') || JSON.parse(localStorage.getItem('todos')).length === 0){ $window.localStorage.setItem('todos', JSON.stringify(List)); }
}
}
if(JSON.parse(localStorage.getItem("todos")) == []) {
  console.log('fff')
}
button.addEventListener('click', function(event){
  if(input.value==""){
  alert("Give some task name!!");
  }
  else
  {
    add();
  }
});
input.addEventListener("keydown", function(event) {  
    if (event.keyCode === 13  ) {
      if(input.value!=""){
      event.preventDefault();
      add();
    }
    else{
      event.preventDefault();
      alert("Give some task name!!");
    }
  }
  });
