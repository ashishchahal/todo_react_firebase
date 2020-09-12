import React from "react";
import "./ToDo.css";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
} from "@material-ui/core";

function ToDo(props) {
  console.log("🔥", props);
  return (
    <List className="todo__list">
      <ListItem>
        <ListItemAvatar></ListItemAvatar>
        <ListItemText primary={props.text} secondary="Dummy deadline ⏰" />
      </ListItem>
    </List>
  );
}

export default ToDo;
