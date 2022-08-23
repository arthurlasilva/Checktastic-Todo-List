import React, { useState } from "react";
import { Container } from "@mui/system";
import { List } from "@mui/material";
import Form from "./Form";
import TodoItem from "./TodoItem";

export default function Favorite() {
  const [todos, setTodos] = useState([]);

  const favoriteTodo = (id) => {
    var filtered = todos.filter((todo) => todo.id !== id);
    setTodos(filtered);
  };
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <Container maxWidth="xs" style={{ marginTop: "3em", marginBottom: "3em" }}>
      <Form addTodo={addTodo} />
      <List sx={{ marginTop: "1em" }}>
        {todos.map((todo) => (
          <div style={{ marginTop: "1em" }}>
            <TodoItem todo={todo} favoriteTodo={favoriteTodo} />
          </div>
        ))}
      </List>
    </Container>
  );
}

//implement favorite button
