
import { Container, List } from '@mui/material'
import React, { useState } from 'react'
import Form from '../components/Form'
import TodoItem from '../components/TodoItem'

export default function Home() {
    const [todos, setTodos] = useState([]);
    
    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    };

    const deleteToDo = (id) => {
        let filtered = todos.filter((todo) => todo.id !== id);
        setTodos(filtered);
    }

    const editTodo = (id, editedText) => {
       const elementIndex = todos.findIndex(todo => todo.id === id);
       let todosArray = [...todos];

       todosArray[elementIndex] = {...todosArray[elementIndex], text: editedText };
       setTodos(todosArray);
    }


  return (
    <Container maxWidth="xs" style={{marginTop: "1em"}}>
      <Form addTodo ={addTodo}/>
      <List sx={{ marginTop: "1em"}}>
        {todos.map((todo) => (
            <div key={todo.id} style={{ marginTop: "1em" }}>
                <TodoItem editTodo={editTodo} todo={todo} deleteToDo={deleteToDo}/>
            </div>
        ))}
      </List>
    </Container>
  )
}
