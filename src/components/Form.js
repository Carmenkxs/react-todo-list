import React from 'react'
import TodoList from './TodoList'

function Form({input,setInput, todos, setTodos, edit,setEdit, todoEditing, setTodoEditing}) {
  const inputTextHandler = e => {
    setInput(e.target.value) 
  }

  const submitTodoHandler = e => {
    e.preventDefault()
    setTodos([
        ...todos,
        {
          id: Math.random()*1000,
          text:input,
          completed: false
        }
      ])
      setInput('')
      setTodoEditing(null);
  }

  return (
    <div>
      <form>
        <input
          type = 'text'
          className = 'todo-input'
          value = {input} 
          onChange = {inputTextHandler}
          />
        <button 
          className ='todo-button'
          type = 'submit'
          onClick= {submitTodoHandler}>
          <i className='fas fa-plus-square'></i>
        </button>
      </form>
    </div>
  )
}

export default Form