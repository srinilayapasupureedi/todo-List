// JavaScript code goes here

const todo=[{name:"Buy Groceries",date:"2023-10-10"},];
function displayTasks() {
let todoHTML='';
for(let i=0;i<todo.length;i++)
{
      const taskobj=todo[i];
      const {name,date}=taskobj;
      const html=`<div>${name}
      </div><div>${date}</div>
        <button class="delete-button" onclick="
         todo.splice(${i},1);
         displayTasks();
        ">Delete</button> `;//generating html
      todoHTML+=html;
      console.log(todoHTML);
}
document.querySelector(".taskList").innerHTML=todoHTML;
}
function handleTasks() {
  const inputElement=document.getElementById("taskInput");
  const task=inputElement.value;
  const dateElement=document.getElementById("dateInput");
  const date=dateElement.value;
  console.log(task);
  todo.push({name:task,date:date});
  inputElement.value='';
  dateElement.value='';
  displayTasks();
}

