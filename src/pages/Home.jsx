import React, { useState } from "react";
import { Container } from "@mui/system";
import { List } from "@mui/material";
import Form from "components/Form";
import TodoItem from "components/TodoItem";


export default function Home({todoCreate}) {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id) => {
    var filtered = todos.filter((todo) => todo.id !== id);
    setTodos(filtered);
  };

  const editTodo = (id, editedText) => {
    var todosArray = todos;

    for (var i in todosArray) {
      if (todosArray[i].id == id) {
        todosArray[i].text = editedText;
      }
    }
  }

  return (
    <Container maxWidth="xs" style={{ marginTop: "3em", marginBottom: "3em" }}>
      <Form addTodo={addTodo} />
      <List sx={{ marginTop: "1em" }}>
        {todos.map((todo) => (
          <div key={todo.id} style={{ marginTop: "1em" }}>
            <TodoItem editTodo={editTodo} todo={todo} deleteTodo={deleteTodo} />
          </div>
          
        ))}
      </List>
    </Container>
  );
}
