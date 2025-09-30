import React, { useState } from "react";
import UseMemo from "./UseMemo";
import ReactMemo from "./ReactMemo";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [error, setError] = useState("");
  const [todo, setTodo] = useState(["inital Todo"]);
  const [input, setInput] = useState("");

  function counterIcment() {
    setCounter(counter + 1);
  }
  const handleAddTodo = () => {
    setTodo([...todo, "new todo"]);
  };

  return (
    <div>
      <h1>Todo App with useMemo and React.memo</h1>
      <h2 id="counter-value">Counter : {counter}</h2>
      <button id="increment-btn" onClick={counterIcment}>Increment</button>
      <UseMemo counter={counter} />

      <h2 >Todo:</h2>
      <ul id="todo-list">
        {todo.map((t, index) => {
          return <ReactMemo key={index} todo={t} />;
        })}
      </ul>
      <button id="add-todo-btn" onClick={handleAddTodo}>Add Todo</button>

      <div style={{ marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Enter custom task"
          value={input}
          id="todo-input"
          onChange={(e) => setInput(e.target.value)}
        />
        <button id="submit-btn"
          onClick={() => {
            if (input.length > 5) {
              setTodo([...todo, input]);
              setInput("");
              setError("");
            } else {
              setError("Task must be more than 5 characters");
            }
          }}
        >
          Submit
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </div>
  );
}


export default App;

