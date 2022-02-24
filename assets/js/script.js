
//timer functions with callback function: 

// let counter = 10
// let countdown = function() {
//     console.log(counter);
//     counter--;
//     if (counter === 0) {
//         console.log("blastoff!!");
//         clearInterval(startCountdown);
//     };
// };
// let startCountdown = setInterval (countdown, 1000);


// let sayHello = function() {
//     console.log("hello there");
// };
// let timedGreeting = setTimeout (sayHello, 2000);


//declaring DOM object references
let formEl = document.querySelector("#task-form");
let tasksToDoEl = document.querySelector("#tasks-to-do");


let taskFormHandler = function (event) {
    //prevent browser"s old habits of reloading page after form submit
    event.preventDefault();
    //create var and query select the element (<input>) with the name attribute of "task-name"
    let taskNameInput = document.querySelector("input[name='task-name']").value;
    //create var and select for element <select> name attribute
    let taskTypeInput = document.querySelector("select[name='task-type']").value;

    //package up data as an object
    let taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput,
    };

    //send as an argument to createTaskEl
    createTaskEl(taskDataObj);
};

let createTaskEl = function(taskDataObj) {
    //declare DOM var and create a <li> element with same styling
    let listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
     //create div to hold task info and add to list item and give it a class name
     let taskInfoEl = document.createElement("div");
     taskInfoEl.className = "task-info";
     //add HTML content to taskInfoEl div. add div element to li element
     taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
     listItemEl.appendChild(taskInfoEl);
     //add list item to unordered list
    tasksToDoEl.appendChild(listItemEl);
}

// EVENT LISTENER has two arguments passed into it: type of event and event response to execute
//addEventListener to button: when we click, a function will run
formEl.addEventListener("submit", taskFormHandler);





