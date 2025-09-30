import React, { useState, useEffect } from "react";
import UseMemoExample from "./UseMemo";
import TodoList from "./ReactMemo";

function App() {
  const [todos, setTodos] = useState(["Learn React", "Learn Hooks"]);
  const [counter, setCounter] = useState(0);
  const [taskInput, setTaskInput] = useState("");

  // Adding a default todo
  const addTodo = () => {
    setTodos([...todos, "New todo"]);
  };
  const addCustomTodo = () => {
    if (taskInput.length > 5) {
      setTodos([...todos, taskInput]);
      setTaskInput("");
    } else {
      alert("Task must be more than 5 characters!");
    }
  };
  const increment = () => {
    setCounter(counter + 1);
  };
  useEffect(() => {
    console.log("Counter updated:", counter);
  }, [counter]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Task Management App</h1>


      <h2>Counter: {counter}</h2>
      <button onClick={increment}>Increment</button>
      <hr />
      <h2>Todos</h2>
      <TodoList todos={todos} />
      <button onClick={addTodo}>Add Todo</button>

      <div style={{ marginTop: "10px" }}>
        <input
          type="text"
          value={taskInput}
          placeholder="Enter custom todo..."
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <button onClick={addCustomTodo}>Submit</button>
      </div>
      <hr />
      <UseMemoExample counter={counter} />
    </div>
  );
}

export default App;
