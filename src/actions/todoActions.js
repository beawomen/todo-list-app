  export const addTask = (task) => {
    console.log('Adding task:', task);
    return {
      type: 'ADD_TASK',
      payload: task,
    };
  };
  
  export const updateTask = (task) => ({
    type: 'UPDATE_TASK',
    payload: task,
  });
  
  export const toggleTask = (taskId) => ({
    type: 'TOGGLE_TASK',
    payload: taskId,
  });
  
  export const deleteTask = (taskId) => ({
    type: 'DELETE_TASK',
    payload: taskId,
  });
  