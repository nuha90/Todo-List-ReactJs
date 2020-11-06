import React, { useState } from "react";
import Children from "./children";

const TodoItems = ({
  description,
  todo,
  deleteTodo,
  handleCompleted,
  handleEdit,
}) => {
  const [onEdit, setOnEdit] = useState(false);
  const [editValue, setEditValue] = useState(todo.description);

  const editTodo = () => {
    setOnEdit(true);
    // handleEdit(description, todo);
  };

  const handleSave = todo => {
    setOnEdit(false);

    if (editValue) {
      handleEdit(editValue, todo);
    } else {
      setEditValue(description);
    }
  };

  if (onEdit) {
    return (
      <Children>
        <input
          type="text"
          value={editValue}
          id="editValue"
          name="editValue"
          onChange={e => {
            setEditValue(e.target.value.toLocaleLowerCase());
          }}
        />
        <button className="save-btn" onClick={() => handleSave(todo)}>
          save
        </button>
      </Children>
    );
  } else {
    return (
      <Children>
        <li className={`todo-item ${todo.completed ? "complete" : ""}`}>
          {description}
        </li>
        <button onClick={() => handleCompleted(todo)} className="complete-btn">
          <i className="fa fa-check"></i>
        </button>

        <button
          onClick={() => {
            deleteTodo(todo);
          }}
          className="trash-btn"
        >
          <i className="fa fa-trash-o"></i>
        </button>

        <button onClick={editTodo} className="edit-btn">
          <i className="fa fa-edit"></i>
        </button>
      </Children>
    );
  }
};

export default TodoItems;
