// TASK: import helper functions from  utils
import { getTasks, createNewTask } from './utils/taskFunctions.js';

// TASK: import initialData
import { initialData } from './initialData.js';

/*************************************************************************************************************************************************
 * FIX BUGS!!!
 * **********************************************************************************************************************************************/

// Function checks if local storage already has data, if not it loads initialData to localStorage
function initializeData() {
  console.log('Initializing data...');
  
  if (!localStorage.getItem('tasks')) {
    console.log('Setting initial data in localStorage');
    localStorage.setItem('tasks', JSON.stringify(initialData));
  }
    localStorage.setItem('showSideBar', 'true');
    console.log('Data initialization completed');
}


// TASK: Get elements from the DOM
const elements = {
  // Navigation Sidebar elements
 sideBarDiv : document.getElementById('side-bar-div'),
 logo : document.getElementById('logo'),
 darkThemeIcon : document.getElementById('icon-dark'),
 lightThemeIcon : document.getElementById('icon-light'),
 themeSwitch : document.getElementById('switch'),
 switchCheckboxTheme : document.getElementById('label-checkbox-theme'),
 hideSidebarBtn : document.getElementById('hide-side-bar-btn'),
 showSidebarBtn : document.getElementById('show-side-bar-btn'),

// Header elements
 headerBoardName : document.getElementById('header-board-name'),
//  dropdownBtn : document.getElementById('dropdownBtn'),
//  chevronIcon : document.getElementById('dropDownIcon'),
 addNewTaskBtn : document.getElementById('add-new-task-btn'),
 editBoardBtn : document.getElementById('edit-board-btn'),
 deleteBoardBtn : document.getElementById('deleteBoardBtn'),

 // Task Columns elements
columnDivs : document.querySelectorAll('.column-div'),

 // New Task Modal elements
 modalWindow : document.getElementById('new-task-modal-window'),
 modalTitleInput : document.getElementById('title-input'),
 modalDescInput : document.getElementById('desc-input'),
 modalSelectStatus : document.getElementById('select-status'),
 createNewTaskBtn : document.getElementById('create-task-btn'),
 cancelAddTaskBtn : document.getElementById('cancel-add-task-btn'),

 // Edit Task Modal elements
 editTaskModal : document.querySelector('.edit-task-modal-window'),
//  editTaskForm : document.getElementById('edit-task-form'),
 editTaskTitleInput : document.getElementById('edit-task-title-input'),
 editTaskDescInput : document.getElementById('edit-task-desc-input'),
 editSelectStatus : document.getElementById('edit-select-status'),
 saveTaskChangesBtn : document.getElementById('save-task-changes-btn'),
 cancelEditBtn : document.getElementById('cancel-edit-btn'),
 deleteTaskBtn : document.getElementById('delete-task-btn'),

 // Filter Div element
 filterDiv : document.getElementById('filterDiv'),
};

let activeBoard = ""

// Extracts unique board names from tasks
// TASK: FIX BUGS
function fetchAndDisplayBoardsAndTasks() {
  const tasks = getTasks();
  const boards = [...new Set(tasks.map(task => task.board).filter(Boolean))];
  displayBoards(boards);
  const localStorageBoard = JSON.parse(localStorage.getItem("activeBoard"))
  activeBoard = localStorageBoard || boards[0]; //Adding an operator  
  elements.headerBoardName.textContent = activeBoard
  styleActiveBoard(activeBoard)
  refreshTasksUI();
  }


// Creates different boards in the DOM
// TASK: Fix Bugs
function displayBoards(boards) {
  const boardsContainer = document.getElementById("boards-nav-links-div");
  boardsContainer.innerHTML = ''; // Clears the container
  boards.forEach(board => {
    const boardElement = document.createElement("button");
    boardElement.textContent = board;
    boardElement.classList.add("board-btn");
    boardElement.addEventListener('click', () => {  //Adding eventListener and fixing the click function
      elements.headerBoardName.textContent = board;
      filterAndDisplayTasksByBoard(board);
      activeBoard = board //assigns active board
      localStorage.setItem("activeBoard", JSON.stringify(activeBoard))
      styleActiveBoard(activeBoard)
    });
    boardsContainer.appendChild(boardElement);
  });
  
}

const colTitles = {
  todo: 'todo',
  doing: 'doing',
  done: 'done',
};

// Filters tasks corresponding to the board name and displays them on the DOM.
// TASK: Fix Bugs
function filterAndDisplayTasksByBoard(boardName) {
  const tasks = getTasks(); // Fetch tasks from a simulated local storage function
  const filteredTasks = tasks.filter(task => task.board === boardName); //Adding comparison operator

  // Ensure the column titles are set outside of this function or correctly initialized before this function runs

  elements.columnDivs.forEach(column => {
    const status = column.getAttribute("data-status");
    // Reset column content while preserving the column title
    const colTitle = colTitles[status];
    column.innerHTML = `<div class="column-head-div">
                          <span class="dot" id="${status}-dot"></span>
                          <h4 class="columnHeader">${colTitle.toUpperCase()}</h4>
                        </div>`;

    const tasksContainer = document.createElement("div");
    column.appendChild(tasksContainer);

    filteredTasks.filter(task => task.status === status).forEach(task => { //Adding comparison Operator
      const taskElement = document.createElement("div");
      taskElement.classList.add("task-div");
      taskElement.textContent = task.title;
      taskElement.setAttribute('data-task-id', task.id);

      // Listen for a click event on each task and open a modal
      taskElement.addEventListener('click', () => { //Adding an eventListener
        openEditTaskModal(task);
      });

      tasksContainer.appendChild(taskElement);
    });
  });
}


function refreshTasksUI() {
  filterAndDisplayTasksByBoard(activeBoard);
}

// Styles the active board by adding an active class
// TASK: Fix Bugs
function styleActiveBoard(boardName) {
  document.querySelectorAll('.board-btn').forEach(btn => { //Using CamelCase on forEach
    
    if(btn.textContent === boardName) {
      btn.classList.add('active') //Adding classList
    }
    else {
      btn.classList.remove('active'); //Adding classList
    }
  });
}


function addTaskToUI(task) {
  const column = document.querySelector(`.column-div[data-status="${task.status}"]`); //Adding backticks
  if (!column) {
    console.error(`Column not found for status: ${task.status}`);
    return;
  }

  let tasksContainer = column.querySelector('.tasks-container');
  if (!tasksContainer) {
    console.warn(`Tasks container not found for status: ${task.status}, creating one.`);
    tasksContainer = document.createElement('div');
    tasksContainer.className = 'tasks-container';
    column.appendChild(tasksContainer);
  }

  const taskElement = document.createElement('div');
  taskElement.classList.add('task-div');
  taskElement.textContent = task.title; // Modify as needed
  taskElement.setAttribute('data-task-id', task.id);

  taskElement.addEventListener('click', () => { 
    openEditTaskModal(task); 
  });
  
  tasksContainer.appendChild(taskElement); 
}



function setupEventListeners() {
  // Cancel editing task event listener
  const cancelEditBtn = document.getElementById('cancel-edit-btn');
  cancelEditBtn.addEventListener('click', () => {toggleModal(false, elements.newTaskModal)}); //Adding eventListener and fixing click function

  // Cancel adding new task event listener
  const cancelAddTaskBtn = document.getElementById('cancel-add-task-btn');
  cancelAddTaskBtn.addEventListener('click', () => {
    toggleModal(false);
    elements.filterDiv.style.display = 'none'; // Also hide the filter overlay
  });

  // Clicking outside the modal to close it
  elements.filterDiv.addEventListener('click', () => {
    toggleModal(false);
    elements.filterDiv.style.display = 'none'; // Also hide the filter overlay
  });

  // Show sidebar event listener
  elements.hideSidebarBtn.addEventListener('click',() => toggleSidebar(false));
  elements.showSidebarBtn.addEventListener('click',() => toggleSidebar(true));
  elements.showSidebarBtn.style.display = 'block';

  // Theme switch event listener
  elements.themeSwitch.addEventListener('change', toggleTheme);

  // Show Add New Task Modal event listener
  elements.createNewTaskBtn.addEventListener('click', () => {
    toggleModal(true);
    elements.filterDiv.style.display = 'block'; // Also show the filter overlay
  });
  // Add new task form submission event listener
  elements.modalWindow.addEventListener('submit', addTask);

  // submitting new task form eventListener
  elements.modalWindow.addEventListener('submit', addTask);
  
  elements.columnDivs.forEach(column => {
    column.addEventListener('click', event => {
      if (event.target.classList.contains('task-div')) {
        const taskId = event.target.getAttribute('data-task-id');
        const task = getTaskById(taskId); 
        openEditTaskModal(task);
      }
    });
  });
};


// Toggles tasks modal
// Task: Fix bugs
function toggleModal(show, modal) {
  if (modal) {
  modal.style.display = show ? 'block' : 'none'; 
}
}

/*************************************************************************************************************************************************
 * COMPLETE FUNCTION CODE
 * **********************************************************************************************************************************************/

function addTask(event) {
  event.preventDefault(); 

  //Assign user input to the task object
    const task = {
      title: elements.modalTitleInput.value,
      description: elements.modalDescInput.value,
      status: elements.modalSelectStatus.value
    };

    const newTask = createNewTask(task);
    if (newTask) {
        addTaskToUI(newTask);
        toggleModal(false, elements.modalWindow);
        elements.filterDiv.style.display = 'none';

        elements.modalWindow.reset();

        refreshTasksUI();
    }
}


function toggleSidebar(show) {
  const sidebar = document.getElementById('side-bar-div');
  if (show) {
  sidebar.style.display = 'block'; 
  } else {
  sidebar.style.display = 'none';
  }
}

function toggleTheme() {
  const isLightTheme = elements.themeSwitch.checked;
  if (isLightTheme) {
    localStorage.setItem('light-theme', 'enabled' ); // set to light mode
  } else{
    localStorage.setItem('light-theme','disabled'); // set back to default
  }

  document.body.classList.toggle('light-theme', isLightTheme); //Toggle the 'light-theme' class
}


function openEditTaskModal(task) {
  // Set task details in modal inputs
  elements.editTaskTitleInput.value = task.title; // Set task title
  elements.editTaskDescInput.value = task.description; // Set task description
  elements.editSelectStatus.value = task.status; // Set task status

  // Get button elements from the task modal
  const deleteBtn = elements.deleteTaskBtn;
  const saveBtn = elements.saveTaskChangesBtn;

  // Call saveTaskChanges upon click of Save Changes button
  saveBtn.addEventListener('click', () => {
    saveTaskChanges(task.id);
    toggleModal(false, elements.editTaskModal)
  })

  // Delete task using a helper function and close the task modal
  deleteBtn.addEventListener('click',() => {
    deleteTask(task.id);
    toggleModal(false, elements.editTaskModal)
  })
  

  toggleModal(true, elements.newTaskModal); // Show the edit task modal
}

function saveTaskChanges(taskId) {
  // Get new user inputs
  const updatedTitle = document.getElementById('edit-task-title-input').value;
  const updatedDescription = document.getElementById('edit-task-desc-input').value;
  const updatedStatus = document.getElementById('edit-select-status').value;

  // Create an object with the updated task details
  const updatedTask = {
    id: taskId,
    title: updatedTitle,
    description: updatedDescription,
    status: updatedStatus
  };

  // Update task using a helper function
  updateTask(taskId, updatedTask); 

  // Close the modal and refresh the UI to reflect the changes
  toggleModal(false, document.querySelector('edit-task-modal-window'))
  refreshTasksUI();
}

/*************************************************************************************************************************************************/

function init() {
  setupEventListeners();
  const showSidebar = localStorage.getItem('showSideBar') === 'true';
  toggleSidebar(showSidebar);
  const isLightTheme = localStorage.getItem('light-theme') === 'enabled';
  document.body.classList.toggle('light-theme', isLightTheme);
  fetchAndDisplayBoardsAndTasks(); // Initial display of boards and tasks
}

document.addEventListener('DOMContentLoaded', init);