/*const todoList = [];
function getToDoListHtml(){
    console.log(todoList);
    var tempHtml = "";
    for (i in todoList) { 
        if(todoList[i] != "")
            tempHtml += '<div style="display: flex; gap:5px"><div>' + todoList[i] + '</div> <div id='+i+'  onClick="deleteToDO(this.id)">X</div></div>';
    }
    document.getElementById("Todos").innerHTML  = tempHtml;
}

function deleteToDO(id){
     todoList[id]="";
     getToDoListHtml();
}*/

function addTodobutton() {
    let userInput = document.getElementById("inputElement");
    let userInputValue = userInput.value;
   // todoList.push(userInputValue);

    if (userInputValue === "") {
        alert("Please enter an item to do");
        return;
    }
    
    //getToDoListHtml();


    
    let todo = document.getElementById("Todos");
    let createDiv= document.createElement('div')
    createDiv.classList.add('todoContainer');
    todo.appendChild(createDiv)
    
    let createTodo = document.createElement("p");
    createTodo.textContent = userInputValue;
    createTodo.classList.add("para");
    createDiv.appendChild(createTodo)

    let deleteButton = document.createElement('button');
    deleteButton.onclick=ondeleteButton();
    deleteButton.textContent="X";
    deleteButton.classList.add('deleteButton');
    createDiv.appendChild(deleteButton)

    userInput.value = "";
    function ondeleteButton(){
    deleteButton.addEventListener("click", function() {
        let todos = document.getElementById("Todos");
        todos.removeChild(createDiv);
    });
}

}

