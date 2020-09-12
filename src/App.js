import React, { useState } from "react";
import { Button, Input, FormControl, InputLabel } from "@material-ui/core";
import "./App.css";
import ToDo from "./ToDo";

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
        <FormControl>
          <InputLabel>✅ Write a ToDo</InputLabel>
          <Input
            className=""
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </FormControl>
        <Button
          disabled={!input}
          color="primary"
          onClick={addTodo}
          variant="contained"
        >
          Add Todo
        </Button>

        {/* <button className="" onClick={addTodo} type="submit">
          Add Todo
        </button> */}
      </form>

      <ul className="">
        {todos.map((todo) => (
          <ToDo text={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
