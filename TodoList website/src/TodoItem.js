// TodoItem.js
import React from 'react';

const TodoItem = ({ text, completed, onRemove }) => {
  return (
    <li>
      {text}
      {completed ? (
        <span style={{ textDecoration: 'line-through' }}>
          Completed!
        </span>
      ) : (
        <button onClick={onRemove}>X</button>
      )}
    </li>
  );
};

export default TodoItem;