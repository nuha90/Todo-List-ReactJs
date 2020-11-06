import React from "react";
import TodoList from "./component/todoList";
import Counter from "./component/counter";
import "./App.css";

function App() {
  return (
    <>
      <Counter />
      <h1>Nouha's Todo List</h1>
      <div className="App">
        <TodoList />
      </div>
    </>
  );
}
export default App;
