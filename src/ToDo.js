import React from "react";
import "./ToDo.css";
import db from "./firebase";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Button,
} from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

function ToDo(props) {
  console.log("🔥", props);
  return (
    <List className="todo__list">
      <ListItem>
        <ListItemAvatar></ListItemAvatar>
        <ListItemText primary={props.todo.todo} secondary="Dummy deadline ⏰" />
      </ListItem>
      <DeleteForeverIcon
        onClick={(e) => db.collection("todos").doc(props.todo.id).delete()}
      />
      {/* delete functionality from db */}
    </List>
  );
}

export default ToDo;
