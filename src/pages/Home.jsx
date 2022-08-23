import React, { useState } from "react";
import { Container } from "@mui/system";
import { List } from "@mui/material";
import Form from "components/Form";
import TodoItem from "components/TodoItem";

export default function Home() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id) => {
    var filtered = todos.filter((todo) => todo.id !== id);
    setTodos(filtered);
  };

  return (
    <Container maxWidth="xs" style={{ marginTop: "3em", marginBottom: "3em" }}>
      <Form addTodo={addTodo} />
      <List sx={{ marginTop: "1em" }}>
        {todos.map((todo) => (
          <div style={{ marginTop: "1em" }}>
            <TodoItem todo={todo} deleteTodo={deleteTodo} />
          </div>
        ))}
      </List>
    </Container>
  );
}
