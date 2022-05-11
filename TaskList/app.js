// UI vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearButton = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');
let tasks;

// Load EventListeners (call)
loadEventListeners();

// Load EventListeners
function loadEventListeners() {

    // DOM loader
    document.addEventListener('DOMContentLoaded', getTasks);

    // Add task event
    form.addEventListener('submit', addTask);

    // 'Clear tasks' button
    clearButton.addEventListener('click', clearTasks);

    // Delete task
    taskList.addEventListener('click', deleteTask);

    // Filter tasks
    filter.addEventListener('keyup', filterTasks);

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

// Get Tasks from LS
function getTasks(){
    let tasks;
    if(localStorage.getItem('tasks') === null){
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }
  
    tasks.forEach(function(task){
      // Create li element
      const li = document.createElement('li');
      // Add class
      li.className = 'collection-item';
      // Create text node and append to li
      li.appendChild(document.createTextNode(task));
      // Create new link element
      const link = document.createElement('a');
      // Add class
      link.className = 'delete-item secondary-content';
      // Add icon html
      link.innerHTML = '<i class="fa fa-remove"></i>';
      // Append the link to li
      li.appendChild(link);
  
      // Append li to ul
      taskList.appendChild(li);
      
      taskCounterUpdate();
    });
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

    // console.log(li);
    
    storeTaskInLocalStorage(taskInput.value);

    taskInput.value = '';

    taskCounterUpdate();

    e.preventDefault();
}

// Clear tasks

function clearTasks(){
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
    clearTasksFromLocalStorage();
    taskCounterUpdate();
    
}

// Delete task
function deleteTask(e){
    if(e.target.className == 'fa fa-remove'){
        // console.log('its ok');
        let delBtn = e.target;
        delBtn.parentNode.parentNode.remove();
        taskCounterUpdate();
        removeTaskFromLocalStorage(delBtn.parentElement.parentElement);
    }
}

// Filter Tasks
function filterTasks(e) {
    const text = e.target.value.toLowerCase();
  
    document.querySelectorAll('.collection-item').forEach(function(task){
      const item = task.firstChild.textContent;
      if(item.toLowerCase().indexOf(text) != -1){
        task.style.display = 'block';
      } else {
        task.style.display = 'none';
      }
    });
  }

  // Store Task
function storeTaskInLocalStorage(task) {
    let tasks;
    if(localStorage.getItem('tasks') === null){
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }
  
    tasks.push(task);
  
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  // Remove from LS
function removeTaskFromLocalStorage(taskItem) {
    let tasks;
    if(localStorage.getItem('tasks') === null){
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }
  
    tasks.forEach(function(task, index){
      if(taskItem.textContent === task){
        tasks.splice(index, 1);
      }
    });
  
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  // Clear Tasks from LS
function clearTasksFromLocalStorage() {
    localStorage.clear();
  }

