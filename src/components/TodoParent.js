import React, {useState} from 'react'
import Form from './Form'
import TodoList from './TodoList'

function TodoParent() {
  const [input,setInput] = useState('')
  const [todos,setTodos]  = useState([])
  const [todoEditing, setTodoEditing] = React.useState(null);
  const [edit,setEdit] = useState('')

  return (
    <div>
      <Form input = {input} setInput = {setInput} todos = {todos} setTodos = {setTodos} edit = {edit} setEdit = {setEdit}  todoEditing = {todoEditing} setTodoEditing = {setTodoEditing}/>
      <TodoList input = {input} setInput = {setInput} todos = {todos} setTodos = {setTodos} edit = {edit} setEdit = {setEdit}  todoEditing = {todoEditing} setTodoEditing = {setTodoEditing}/>
    </div>
  )
}

export default TodoParent