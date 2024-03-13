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
    if (title.length > 20) {
      alert('Title should not exceed 20 characters.');
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
        <div className="header-content">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter task title"
              value={title}
              className="input-feild"
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter task description"
              value={description}
              className="input-feild"
              onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit" className='add-btn'>{editId !== null ? 'Save Changes' : 'Add Task'}</button>
          </form>
          <div className="quote-container">
            <p className="quote">Start organizing your tasks effortlessly with this Todo List app!</p>
          </div>
        </div>
        <div className="task-list">
          <h2>Tasks</h2>
          {tasks.length === 0 ? (
            <p>No tasks added yet.🙄</p>
          ) : (
            <div>
              <table>
                <thead>
                  <tr>
                    <th>Sr no.&nbsp;</th>
                    <th>Title&nbsp;</th>
                    <th>Description&nbsp;</th>
                    <th>Status&nbsp;&nbsp;</th>
                    <th>Mark as Completed&nbsp;&nbsp;</th>
                    <th>Actions&nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  {tasks.map((task, index) => (
                    <tr key={task.id} className={task.completed ? 'completed' : ''}>
                      <td>{index + 1}&nbsp;</td>
                      <td>{task.title}&nbsp;&nbsp;&nbsp;</td>
                      <td>{task.description}&nbsp;&nbsp;&nbsp;</td>
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
                            <button className='act-btn' onClick={() => handleEdit(task.id, task.title, task.description)}>Edit</button>
                            <button className='act-btn' onClick={() => handleDelete(task.id)}>Delete</button>
                          </>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button className='act-btn' onClick={handleClearCompleted}>Clear Completed</button>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

const mapStateToProps = (state) => ({
  tasks: state.tasks,
});

export default connect(mapStateToProps, { addTask, updateTask, toggleTask, deleteTask })(App);
