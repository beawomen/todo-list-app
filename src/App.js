import React, { useState } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addTask, updateTask, toggleTask, deleteTask } from './actions/todoActions';
function App({ tasks, addTask, updateTask, toggleTask, deleteTask }) {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [editId, setEditId] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '') {
      alert('Please enter a task title.');
      return;
    }
    if (description.length > 25) {
      alert('Description should not exceed 25 characters.');
      return;
    }
    if (editId !== null) {
      const updatedTask = { id: editId, title, description, completed: false };
      updateTask(updatedTask);
      setEditId(null);
      alert('Task successfully updated.');
    } else {
      const newTask = { id: Date.now(), title, description, completed: false };
      addTask(newTask);
    }
    setTitle('');
    setDescription('');
  };

  const handleEdit = (id, currentTitle, currentDescription) => {
    setTitle(currentTitle);
    setDescription(currentDescription);
    setEditId(id);
  };

  const handleToggle = (id) => {
    toggleTask(id);
  };

  const handleDelete = (id) => {
    const isConfirmed = window.confirm('Are you sure you want to delete this task?');
    if (isConfirmed) {
      deleteTask(id);
    }
  };

  const handleClearCompleted = () => {
    const completedTaskIds = tasks.filter(task => task.completed).map(task => task.id);
    completedTaskIds.forEach(id => {
      deleteTask(id);
    });
  };

  console.log("tasks>>", tasks)
  return (
    <div className="App">
      <header className="App-header">
        <h1>To-Do List</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter task title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter task description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button type="submit">{editId !== null ? 'Save Changes' : 'Add Task'}</button>
        </form>
        <div className="task-list">
          <h2>Tasks</h2>
          <table>
            <thead>
              <tr>
                <th>Serial No.</th>
                <th>Title</th>
                <th>Description</th>
                <th>Status</th>
                <th>Mark as Completed</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task, index) => (
                <tr key={task.id} className={task.completed ? 'completed' : ''}>
                  <td>{index + 1}</td>
                  <td>{task.title}</td>
                  <td>{task.description}</td>
                  <td>{task.completed ? 'Completed' : 'Pending'}</td>
                  <td>
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => handleToggle(task.id)}
                    />
                  </td>
                  <td>
                    {!task.completed && (
                      <>
                        <button onClick={() => handleEdit(task.id, task.title, task.description)}>Edit</button>
                        <button onClick={() => handleDelete(task.id)}>Delete</button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={handleClearCompleted}>Clear Completed</button>
        </div>
      </header>
    </div>
  );
}

const mapStateToProps = (state) => ({
  tasks: state.tasks,
});

export default connect(mapStateToProps, { addTask, updateTask, toggleTask, deleteTask })(App); // Connect component to Redux store
