import React, { useState, useEffect } from "react";
import { Button, Input, FormControl, InputLabel } from "@material-ui/core";
import "./App.css";
import ToDo from "./ToDo";
import firebase from "firebase";
import db from "./firebase";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  //when the app loads, we need to listen to the database and fetch new todos as they get added/removed
  useEffect(() => {
    // this code here... fires when the app.js loads
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        //onSnapshot listenes to your db and fires setTodos
        setTodos(
          snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
        );
      });
  }, []);

  console.log("🙅‍♀️", input);

  const addTodo = (e) => {
    // this will fire when button is clicked
    e.preventDefault();

    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className="App">
      <h1 className="app__heading">Hello Peeps 🤼!!</h1>

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
          type="submit"
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
          <ToDo todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
