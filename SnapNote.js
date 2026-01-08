
// select overlay and popup and add new task task 

var overlaybox = document.querySelector(".overlay");
var popupbox = document.querySelector(".popup");
var addnewtask = document.getElementById("add-new-task")

addnewtask.addEventListener("click",function(){
    popupbox.style.display="block";
    overlaybox.style.display="block";
})

// Select delete button

var deletetask = document.getElementById("delete-task");

deletetask.addEventListener("click",function(event){
    event.preventDefault();
    popupbox.style.display="none";
    overlaybox.style.display="none";    
})


//  select  task name input, task date input, task description input, add task 

var container = document.querySelector(".taskcontainer");
var taskNameInput = document.getElementById("task-name-input");
var taskDateInput = document.getElementById("task-date-input");
var taskDescriptionInput = document.getElementById("task-description-input");
var addTask = document.getElementById("add-task");


addTask.addEventListener("click",function(event){

    event.preventDefault();

    var div = document.createElement("div");
    div.setAttribute("class","content");
    div.innerHTML=`<h1>${taskNameInput.value}</h1>
        <h4>${taskDateInput.value}</h4>
        <p>${taskDescriptionInput.value}</p>
        <button onclick="del(event)">Delete</button>`

    container.append(div);

    popupbox.style.display="none";
    overlaybox.style.display="none"; 
})



function del(event){
   event.target.parentElement.remove();
}
