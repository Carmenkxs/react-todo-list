import React from 'react'
import Todo from './Todo'

function TodoList({todos, setTodos, edit, setEdit, todoEditing, setTodoEditing}) {

  return (
    <div className = 'todo-container'>
        <ul className = 'todo-list'>
            {todos.map(todo => (
                <Todo
                    key = {todo.id}
                    text = {todo.text}
                    todo = {todo}
                    todos = {todos}
                    setTodos = {setTodos}    
                    edit = {edit}
                    setEdit = {setEdit}
                    todoEditing = {todoEditing}
                    setTodoEditing = {setTodoEditing}
                    />
            ))}
        </ul>
    </div>
  )
}

export default TodoList