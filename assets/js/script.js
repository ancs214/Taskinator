

//declaring DOM object references
let formEl = document.querySelector("#task-form");
let tasksToDoEl = document.querySelector("#tasks-to-do");
let taskIdCounter = 0;


let taskFormHandler = function (event) {
    //prevent browser"s old habits of reloading page after form submit
    event.preventDefault();
    //create var and query select the element (<input>) with the name attribute of "task-name"
    let taskNameInput = document.querySelector("input[name='task-name']").value;
    //create var and select for element <select> name attribute
    let taskTypeInput = document.querySelector("select[name='task-type']").value;

    //form input validation; check for empty strings
    if (!taskNameInput || !taskTypeInput) {
        alert("You need to fill out the task form!");
        return false;
    }
    //will reset form after submission. **METHOD ONLY WORKS ON FORM ELEMENTS!!**
    formEl.reset();

    //package up data as an object
    let taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput,
    };

    //send as an argument to createTaskEl
    createTaskEl(taskDataObj);
};

let createTaskEl = function (taskDataObj) {
    //declare DOM var and create a <li> element with same styling
    let listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    //add task id as a custom attribute
    listItemEl.setAttribute("data-task-id", taskIdCounter);

    //create div to hold task info and add to list item and give it a class name
    let taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info";
    //add HTML content to taskInfoEl div. add div element to li element
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
    listItemEl.appendChild(taskInfoEl);


    let taskActionsEl = createTaskActions(taskIdCounter);
    listItemEl.appendChild(taskActionsEl);
    tasksToDoEl.appendChild(listItemEl);
    
    //add list item to unordered list
    tasksToDoEl.appendChild(listItemEl);

    //increase task counter for the next unique id
    taskIdCounter++;
};

let createTaskActions = function (taskId) {
    //this div will act as a container for the other elements
    let actionContainerEl = document.createElement("div");
    actionContainerEl.className = "task-actions";

    //create edit button
    let editButtonEl = document.createElement("button");
    editButtonEl.textContent = "Edit";
    editButtonEl.className = "btn edit-btn";
    editButtonEl.setAttribute("data-task-id", taskId);

    actionContainerEl.appendChild(editButtonEl);

    //create delete button
    let deleteButtonEl = document.createElement("button");
    deleteButtonEl.textContent = "Delete";
    deleteButtonEl.className = "btn delete-btn";
    deleteButtonEl.setAttribute("data-task-id", taskId);

    actionContainerEl.appendChild(deleteButtonEl);

    let statusSelectEl = document.createElement("select");
    statusSelectEl.className = "select-status";
    statusSelectEl.setAttribute("name", "status-change");
    statusSelectEl.setAttribute("data-task-id", taskId);

    let statusChoices = ["To Do", "In Progress", "Completed"];
    for (var i = 0; i < statusChoices.length; i++) {
        // create option element
        var statusOptionEl = document.createElement("option");
        statusOptionEl.textContent = statusChoices[i];
        statusOptionEl.setAttribute("value", statusChoices[i]);
      
        // append to select
        statusSelectEl.appendChild(statusOptionEl);
    }

    actionContainerEl.appendChild(statusSelectEl);
    return actionContainerEl;
}

// EVENT LISTENER has two arguments passed into it: type of event and event response to execute
//addEventListener to button: when we click, a function will run
formEl.addEventListener("submit", taskFormHandler);





