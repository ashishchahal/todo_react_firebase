import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    "take the dogs out for a walk",
    "exercise daily",
    "meditation",
  ]);

  const [input, setInput] = useState("");

  console.log("🙅‍♀️", input);

  const addTodo = (e) => {
    // this will fire when button is clicked

    console.log("👽", e);
    e.preventDefault();
    setTodos([...todos, input]);
    setInput("");
  };

  return (
    <div className="App">
      <h1 className="">Hello Peeps!!</h1>

      <form>
        <input
          className=""
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="" onClick={addTodo}>
          Add Todo
        </button>
      </form>

      <ul className="">
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
