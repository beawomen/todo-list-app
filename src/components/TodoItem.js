import React, { useState } from 'react';

const TodoItem = ({ todo, onDelete, onToggle, onUpdate }) => {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    onUpdate(todo.id, title, description);
    setEditing(false);
  };

  const handleToggle = () => {
    onToggle(todo.id);
  };

  const handleDelete = () => {
    onDelete(todo.id);
  };

  return (
    <li>
      {editing ? (
        <>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <span>{todo.title}</span>
          <span>{todo.description}</span>
          <button onClick={handleEdit}>Edit</button>
        </>
      )}
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggle}
      />
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default TodoItem;
