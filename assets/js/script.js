
//timer functions with callback function: 

// let counter = 10
// let countdown = function() {
//     console.log(counter);
//     counter--;
//     if (counter === 0) {
//         console.log('blastoff!!');
//         clearInterval(startCountdown);
//     };
// };
// let startCountdown = setInterval (countdown, 1000);


// let sayHello = function() {
//     console.log('hello there');
// };
// let timedGreeting = setTimeout (sayHello, 2000);


//declaring DOM object references
let buttonEl = document.querySelector('#save-task');
let tasksToDoEl = document.querySelector('#tasks-to-do');


let  createTaskHandler = function() {
//declare DOM var for creating a <li> element
let listItemEl = document.createElement('li');
//make styling the same as other li elements
listItemEl.className = 'task-item';
//use DOM property textContent to insert text into li element
listItemEl.textContent = 'This is a new task.';
//use DOM property appendChild to append the child of tasks-to-do 
tasksToDoEl.appendChild(listItemEl);
};


// EVENT LISTENER has two arguments passed into it: type of event and event response to execute
//addEventListener to button: when we click, a function will run
buttonEl.addEventListener('click', createTaskHandler);




