import React, {useState} from 'react'
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import TodoParent from './components/TodoParent';

function App() {

  return (
    <div className = 'App'>
        <header>
          <h1>Todo List</h1>
        </header>
        <TodoParent/>
    </div>
  );
}

export default App;
