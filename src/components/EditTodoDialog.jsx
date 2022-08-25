import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { TextField } from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  // @ts-ignore
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function EditTodoDialog({ open, dialogHandler, todo, editTodo }) {
  const [editedText, setEditedText] = React.useState(todo.text);

  const textHandler = () => {
    editTodo(todo.id, editedText);
    dialogHandler();
  };

  return (
    <Dialog
      open={open}
      // @ts-ignore
      TransitionComponent={Transition}
      keepMounted
      onClose={dialogHandler}
      aria-labelledby="alert-dialog-slide-title"
      fullWidth
    >
      <DialogTitle>{"Editing Text"}</DialogTitle>
      <DialogContent>
        <TextField
          defaultValue={todo.text}
          fullWidth
          onChange={(e) => setEditedText(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              textHandler();
            }
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={dialogHandler}>Cancel</Button>
        <Button onClick={textHandler}>Accept</Button>
      </DialogActions>
    </Dialog>
  );
}
