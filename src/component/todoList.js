import React, { useState } from "react";
import TodoItems from "./todoItems";
import "react-nice-dates/build/style.css";

const TodoList = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = e => {
    const value = e.target.value;
    setInput(value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (input === "") {
      alert("Todo description must be filled out");
      return false;
    }
    setTodos([
      ...todos,
      {
        description: input,
        id: Math.floor(Math.random() * 1000),
        completed: false,
      },
    ]);
    setInput("");
  };

  const deleteTodo = todo => {
    setTodos(todos.filter(el => el !== todo));
  };

  const handleCompleted = todoId => {
    const changeComplete = todos.map(item => {
      if (item.id === todoId.id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setTodos(changeComplete);
  };

  const handleEdit = (editValue, editedValueId) => {
    console.log("iddd", { editedValueId, editValue });

    const newTodos = [...todos];
    console.log(newTodos);
    newTodos.forEach(todo => {
      console.log("todo id", todo.id);
      console.log("editedValueId", editedValueId.id);
      if (todo.id === editedValueId.id) {
        todo.description = editValue;
      }
    });
    setTodos(newTodos);
  };

  return (
    <>
      <div className="add-container">
        <form onSubmit={handleSubmit}>
          <input
            value={input}
            type="text"
            placeholder="Todo description"
            onChange={handleChange}
          />
          <br />

          <input type="submit" value="Add new todo" className="add-btn" />
        </form>
      </div>
      <div className="todo-container">
        {todos.length ? (
          <ul className="todo-list">
            {todos.map(todo => (
              <TodoItems
                key={todo.id}
                description={todo.description}
                todo={todo}
                deleteTodo={deleteTodo}
                handleCompleted={handleCompleted}
                handleEdit={handleEdit}
              />
            ))}
          </ul>
        ) : (
          <div>You don't have any todos</div>
        )}
      </div>
    </>
  );
};

export default TodoList;
