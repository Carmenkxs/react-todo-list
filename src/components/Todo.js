import React from 'react'

function Todo({text, todo, todos, setTodos, edit, setEdit,  todoEditing, setTodoEditing}) {
    const completeHandler = (e) => {
        setTodos((oldState) => {
          const newTodo = todos.map((item) => {
            if (item.id === todo.id) {
              item.completed = !item.completed
              return item
            }
            return item
          })
          return newTodo
        })
      }

    const editHandler = (e)  => {
        const updatedTodos = [...todos].map(item => {
            if(item.id === todo.id){
                item.text = edit
            }
            return todo
        })
        setTodoEditing(null)
        setEdit('')
        console.log(todo.text)
    }
    

    const deleteHandler = (e) => {
        setTodos(todos.filter(el => el.id !== todo.id))
    }

  return (
    <div className = 'todo'>
    {/* swaps input and list item around if edit button is selected */}
        {todoEditing === todo.id ? (
            <input
            type = 'text'
            // value = {text}
            onChange={(e) => setEdit(e.target.value)}
        />
        ):
        <li 
            className = {`todo-item ${todo.completed ? 'completed':''}`}>{text}
        </li>
        }
        
        <button 
            className='complete-btn'
            onClick={completeHandler}
            >
            <i className = 'fas fa-check'/>
        </button>

        {/* swaps edit and submit edit button around */}
        {todoEditing === todo.id ? (
            <button 
            className='edit-btn'
            value = {edit}
            onClick={editHandler}
        >Done
        </button>
        ):
        
        <button 
            className='edit-btn'
            value = {edit}
            onClick={(e) => setTodoEditing(todo.id)}
        ><i className = 'fas fa-edit'/>
        </button>

        }
        
    
        <button 
            className='delete-btn'
            onClick={deleteHandler}
            >
             <i className = 'fas fa-trash'/>
        </button>
    </div>
  )
}

export default Todo