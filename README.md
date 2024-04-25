### [JSL11] Agile Board - Kanban Task Management App

Welcome to the Agile Board project, the final project for the JSL course! In this portfolio piece project, you will be stepping into the shoes of a juniour developer tasked with bringing a Kanban Task Management App to life. You're not starting from scratch, though. In this project, you are tasked with tackling the provided user stories to both identify and fix bugs in the code, as well as to develop your own functions to extend the application's capabilities. Key assignments include importing utility functions, initializing data, and diving into debugging tasks such as setting up data correctly in local storage, dynamically displaying boards and tasks, and enhancing user interactions.

Additionally, you will enhance the application by crafting code to meet specific functionalities outlined in the user stories, like managing task details and their lifecycle, toggling theme customization, and ensuring the persistence of data through local storage. This blend of debugging and creative coding invites you to apply your critical thinking and problem-solving skills in a hands-on manner, equipping you for the intricacies of real-world software development scenarios.

We're providing you with a head start:

- **Starter Code**: You will receive starter code for the user interface (UI) of the application. This includes the basic layout and some of the JavaScript (JS) functionality needed to make the app interactive.

- **Your Mission**: Your main task is to complete the app by implementing the features described in the provided user stories. These stories outline the functionality that users expect from the app, such as adding, editing, and deleting tasks, as well as customizing themes and managing the task lifecycle.

- **🪲Important Note on Debugging🚨:** In the sections of the project where you are tasked with debugging the code, *it's crucial to focus on identifying and correcting errors within the existing functions rather than undertaking a complete refactoring of the code.* This means you will need to carefully analyze the provided starter code to pinpoint syntax errors, logical mistakes, or any bugs that prevent the application from functioning as intended. **The goal is to improve and repair the codebase by making precise adjustments, ensuring that the original structure, function logic and intended functionality are preserved.** This approach not only aligns with the project's requirements but also hones the essential skill of debugging— a critical competency for any developer.

### Walkthrough by Coach Kenneth

Jump into the walkthrough of the project and starter code here: https://www.youtube.com/watch?v=aD8Wx9PGYSc

### Project Overview

As a newly hired developer at Agile Board, a fictional company specializing in innovative task management solutions, you'll embark on an exciting journey to enhance their flagship Kanban Task Management App.

![alt text](assets/JSL11_solution.gif)

# Agile Board Project Feature List

In this Agile Board Project Feature List, you're introduced to a comprehensive suite of functionalities designed to enrich your Kanban Task Management App. 

As you embark on implementing these features, remember the value of tackling the project one small task at a time. This approach not only makes the process more manageable but also ensures that you can focus on the quality of each feature, leading to a more robust and user-friendly application. Your journey through this project is a great opportunity to apply and hone your skills, so take it step by step and enjoy the learning experience.

![alt text](assets/task-management-feature.gif)
# Task Interaction and Detail Management
- **Clicking an Individual Task for Details**: As a user, I want to click on an individual task so that I can view its details and make edits if necessary.
- **Opening the Task Edit Modal**: As a user, I want to open a modal window when adding or editing tasks to easily input task information.
- **Updating the Task Title**: As a user, I want to update the task title within the modal to change how it’s displayed on the board.
- **Updating the Task Description**: As a user, I want to update the task description within the modal so I can better describe what needs to be done.
- **Updating the Task Status**: As a user, I want to update the current status of a task (todo, doing, done) to track its progress.
- **Saving Task Changes**: As a user, I want to save the changes I make to a task so that the updated details are stored and displayed.
- **Updating the UI with Task Changes**: As a user, I expect the changes I make to a task to be reflected immediately on the UI without needing to refresh.
- **Deleting a Task from the Edit Modal**: As a user, I want the ability to delete a task directly from the edit modal if it’s no longer needed.
- **Canceling Edits Without Saving**: As a user, I want to be able to cancel my edits and close the modal without saving to avoid accidental changes.
- **Editing Task Details**: As a user, I want to edit the details of an existing task to correct or update information as needed.
- **Easy Navigation Between Task Statuses**: As a user, I want to easily move tasks between statuses (todo, doing, done) to reflect their current progress.
- **Viewing Task Details**: As a user, I want to view detailed information about a task to understand its scope and requirements fully.

![alt text](assets/delete-feature.gif)
# Task Deletion and Confirmation Mechanisms
- **Clicking "Delete Task" Button**: As a user, I want to click a "Delete Task" button within the task edit modal so I can remove tasks that are no longer necessary.
- **Immediate UI Update on Task Deletion**: As a user, I expect a task to disappear from the UI immediately after I confirm its deletion to reflect the current state of my task list.
![alt text](<assets/Theme Customization.gif>)

# Theme Customization
- **Switching to Dark Mode**: As a user, I want to switch to dark mode so that I can reduce eye strain in low-light conditions.
- **Switching Back to Light Mode**: As a user, I want to switch back to light mode from dark mode to better suit bright environments and see the logo update accordingly.

![alt text](assets/sidebar-feature.gif)
# Managing the Sidebar
- **Hiding the Side Bar for More Workspace**: As a user, I want the ability to hide the side bar to gain more workspace.
- **Opening the Side Bar for Navigation and Options**: As a user, I want to easily open the side bar to navigate between boards.

![alt text](assets/add-task-feature.gif)
# Task Lifecycle Management
- **Clicking "Add New Task" to Start Adding a Task**: As a user, I want to click the "Add New Task" button so I can begin the process of adding a new task to my board.
- **Modal Opens for New Task Input**: As a user, I expect the modal to open when I click "Add New Task" to provide me with a form to input the task's details.
- **Adding a Title to the New Task**: As a user, I want to be able to add a title to my new task so I can clearly identify it on the board.
- **Adding a Description to the New Task**: As a user, I want to be able to add a description to my new task to provide more details about what needs to be done.
- **Selecting a Status for the New Task**: As a user, I want to select a status for my new task (e.g., Todo, Doing, Done) to categorize it based on its progress.
- **Creating the New Task**: As a user, I want to click a "Create Task" button in the modal to save the new task to the board.
- **New Task Appears in UI Under Correct Status**: As a user, I expect the new task to appear in the UI under the correct status column immediately after creation.
- **Viewing New Task Details**: As a user, I want to view detailed information about the New Task to understand its scope and requirements fully.
- **Editing New Task Details**: As a user, I want to edit the details of the New Task to correct or update information as needed.

![alt text](assets/localStorage-feature.gif)
# Local Storage and Data Persistence
- **Saving New Tasks in localStorage**: As a user, I want my newly created tasks to be saved in localStorage so that my tasks persist even when I close or refresh the browser.
- **Reflecting Task Updates in localStorage**: As a user, I expect tasks that I update to have their changes reflected in localStorage so that any modifications are not lost.
- **Removing Deleted Tasks from localStorage**: As a user, I want tasks that I delete to be removed from localStorage so that my task list remains accurate and up-to-date.

## Loom Video Presentation link:
 https://www.loom.com/share/1d6c79ae5e944291b882056592e41d71?sid=8c68a038-8355-4610-960e-a8ea29252932

## Feedback:
This project was very challenging, I personally had no idea what I was doing in the beginning. As time went on though, I slowly understood what was required of me. 

## Challenges:
I had a lot of challenges in this project but I got to understand them the more I did my research and the asked for help. I had a lot of errors and some of the features were not functioning they way they were supposed to. Some of them are still not functioning the way they're supposed to due to not having enough time to complete this project. I am still working on the project in order to find my mistakes and make sure the whole code functions well.

