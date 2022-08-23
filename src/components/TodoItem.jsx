import * as React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import { Paper } from "@mui/material";

export default function TodoItem({todo, deleteTodo}) {

  return (
    <Paper style={{ padding: "1em" }}>
      <ListItem
        secondaryAction={
          <IconButton edge="end" aria-label="delete"  onClick={() => deleteTodo(todo.id)}>
            <DeleteIcon />
          </IconButton>
        }
        disablePadding
      >
        <ListItemButton role={undefined} dense>
          <ListItemIcon>
            <Checkbox
              edge="start"
              tabIndex={-1}
              disableRipple
              style={{ padding: "1em" }}
            />
          </ListItemIcon>
          <ListItemText primary={todo.text} />
        </ListItemButton>
      </ListItem>
    </Paper>
  );
  }
function deleteTodo(id) {
  throw new Error("Function not implemented.");
}
