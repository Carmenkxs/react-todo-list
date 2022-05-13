import React from 'react'

function Todo({text, todo, todos, setTodos, edit, setEdit,  todoEditing, setTodoEditing}) {
    const completeHandler = (e) => {
        setTodos(todos.map(item => {
            if(item.id === todo.id)
            return {
                ...item, completed:!item.completed
            }
        }))
    }

    const editHandler = (e)  => {
        const updatedTodos = [...todos].map(item => {
            if(item.id === todo.id){
                item.text = edit
            }
            return todo
        })
        // setTodos(updatedTodos)
        setTodoEditing(null)
        setEdit('')
    }
    

    const deleteHandler = (e) => {
        setTodos(todos.filter(el => el.id !== todo.id))
    }

  return (
    <div className = 'todo'>
    {/* swap input and list item around if edit button is selected */}
        {todoEditing === todo.id ? (
            <input
            type = 'text'
            onChange={(e) => setEdit(e.target.value)}
        />
        ):
        <li className = {`todo-item ${todo.completed ? 'completed':''}`}>{text}</li>
        }
        
        <button 
            className='complete-btn'
            onClick={completeHandler}
            >
            <i className = 'fas fa-check'/>
        </button>


        {todoEditing === todo.id ? (
            <button 
            className='complete-btn'
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