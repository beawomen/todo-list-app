Todo List Application
Overview
The Todo List Application is a simple web application built with React and Redux that allows users to manage their tasks effectively. The purpose of this application is to provide users with a convenient way to create, edit, delete, and mark tasks as completed.

Features
Add new tasks with a title and description
Edit existing tasks
Mark tasks as completed or pending
Delete tasks individually or clear all completed tasks at once
How to Run the Project Locally
Clone this repository to your local machine using git clone.
Navigate to the project directory.
Install dependencies by running npm install.
Start the development server with npm start.
Open your web browser and visit http://localhost:3000 to view the application.
Folder Structure and Key Files
src/: Contains all source code files for the application.
components/: Contains React components.
actions/: Contains Redux action creators.
reducers/: Contains Redux reducers.
store/: Contains Redux store configuration.
App.js: Main component where Redux store is connected.
index.js: Entry point of the application.
public/: Contains public assets and the HTML template.
External Libraries or APIs Used
React: JavaScript library for building user interfaces.
Redux: State management library for managing application state.
Redux Persist: Library for persisting Redux state to local storage.
Interacting with the Application
To add a new task, enter a title and description in the input fields at the top of the page and click the "Add Task" button.
To edit an existing task, click the "Edit" button next to the task you want to edit, make changes in the input fields, and click the "Save Changes" button.
To mark a task as completed or pending, click the checkbox next to the task.
To delete a task, click the "Delete" button next to the task you want to delete.
To clear all completed tasks, click the "Clear Completed" button at the bottom of the task list.

Additional Details:
Challenges Encountered:
One challenge during the development process was managing the state and actions in Redux, especially when implementing features like task editing and marking tasks as completed. This was resolved by carefully designing the Redux state structure and implementing appropriate action creators and reducers.
Another challenge was styling the application to achieve the desired UI/UX. This was addressed by experimenting with CSS styles and leveraging external libraries such as Bootstrap for component styling.
Additional Features and Improvements:
Implemented task completion status indicators: Added visual cues to indicate whether a task is completed or pending, enhancing the user experience and readability of the task list.
Enhanced task input validation: Implemented validation checks for task title and description length to ensure data integrity and provide user feedback.
Persisted task data: Utilized Redux Persist library to persist task data in the browser's local storage, allowing users to retain their task list even after refreshing the page.
Notes:
This project serves as a simple demonstration of integrating React with Redux for state management in a real-world application scenario.
The codebase follows best practices for readability, maintainability, and scalability, with modularized components and separation of concerns between presentation and logic layers.
Future enhancements could include adding user authentication, implementing data filtering and sorting options, and improving accessibility features for a more inclusive user experience.