import React, { useState } from "react";
import "./ToDo.css";
import db from "./firebase";
//import firebase from "firebase";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Button,
  Modal,
  FormControl,
  InputLabel,
  Input,
} from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    borderRadius: "2px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function ToDo(props) {
  //console.log("🔥", props);
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  const updateTodo = () => {
    //update todo with the new input text
    // to update in firebase db we use .set
    db.collection("todos").doc(props.todo.id).set(
      {
        todo: input,
        //timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
    setOpen(false);
  };

  return (
    <>
      <Modal open={open} onClose={(e) => setOpen(false)}>
        <div className={classes.paper}>
          <h1>Update your task!</h1>
          <form>
            <FormControl>
              <InputLabel>Update here!</InputLabel>
              <Input
                className=""
                placeholder={props.todo.todo}
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            </FormControl>
            <Button
              disabled={!input}
              type="submit"
              color="primary"
              onClick={updateTodo}
              variant="contained"
            >
              Update
            </Button>
          </form>

          {/* <input
            placeholder={props.todo.todo}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button onClick={updateTodo} type="submit">
            Update
          </Button> */}
        </div>
      </Modal>
      <List className="todo__list">
        <div className="todo__left">
          <ListItem className="todo__listItem">
            <ListItemAvatar>☠️</ListItemAvatar>
            <ListItemText primary={props.todo.todo} secondary="deadline ⏰" />
          </ListItem>
        </div>

        <div className="todo__right">
          <Button
            variant="contained"
            color="secondary"
            onClick={(e) => setOpen(true)}
            className="todo__listEdit"
          >
            Edit
          </Button>
          <DeleteForeverIcon
            onClick={(e) => db.collection("todos").doc(props.todo.id).delete()}
            className="todo__listDelete"
          />
        </div>

        {/* delete functionality from db */}
      </List>
    </>
  );
}

export default ToDo;
