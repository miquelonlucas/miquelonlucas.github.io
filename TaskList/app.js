// UI vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearButton = document.querySelector('.clear-tasks');
const filter = document.querySelector('.filter');
const taskInput = document.querySelector('#task');

// Load EventListeners (call)
loadEventListeners();

// Load EventListeners
function loadEventListeners() {
    // Add task event
    form.addEventListener('submit', addTask);

    // 'Clear tasks' button
    clearButton.addEventListener('click', clearTasks);

    // Delete task
    taskList.addEventListener('click', deleteTask);
}



// FUNCTIONS

// Task counter
function taskCounter(){
    let taskListLength = $(".collection-item").children().length;
    return taskListLength;
}

// Task counter update

function taskCounterUpdate(){
    let taskTitle = document.querySelector('#task-title');
    if (taskCounter() != 0){
        taskTitle.innerHTML = `Tasks<span class="badge">${taskCounter()} to go</span>`;
    } else {
        taskTitle.innerHTML = 'Tasks';
    }
}

// Add task event
function addTask(e){
    if(taskInput.value === ''){
        return alert('I\'ve got a blank space, baby.');
        e.preventDefault();
    }

    
    // Create li element
    const li = document.createElement('li');
    
    // Add class to li
    li.className = 'collection-item';
    
    if(taskInput.value.toLowerCase() === 'workout' || taskInput.value.toLowerCase() === 'study'){
        li.classList.add('white-text');
        li.classList.add('red');
        li.classList.add('lighten-1');
    }

    li.appendChild(document.createTextNode(taskInput.value));
    
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    
    link.innerHTML = '<i class="fa fa-remove"><\i>';

    li.appendChild(link);

    taskList.appendChild(li);

    console.log(li);
    
    taskInput.value = '';

    taskCounterUpdate()

    e.preventDefault();
}

// Clear tasks

function clearTasks(){
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
    taskCounterUpdate()
}


function deleteTask(e){
    if(e.target.className == 'fa fa-remove'){
        // console.log('its ok');
        let delBtn = e.target;
        delBtn.parentNode.parentNode.remove();
        taskCounterUpdate()
    }
}
