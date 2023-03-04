import React from 'react';
import { TodoCounter } from "../TodoCounter/TodoCounter.js";
import { TodoSearch } from "../TodoSearch/TodoSearch.js";
import { TodoList } from "../TodoList/TodoList.js";
import { TodoItem } from "../TodoItem/TodoItem.js";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton.js";
import { TodoContext } from '../TodoContext/index.js';

function AppUI(){
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo
  } = React.useContext(TodoContext);

  return(
    <React.Fragment>
    <TodoCounter/>
    <TodoSearch/>
    <CreateTodoButton/>

    <TodoList>
    {error && <p>Hubo un error..</p>}
    {loading && <p>Estamos cargando...</p>}
    {(!loading && !searchedTodos.length) && <p>Crea un todo..</p>}
    {searchedTodos.map(todo =>(
      <TodoItem 
      key = {todo.text}
      text = {todo.text} 
      completed = {todo.completed}
      onComplete = {()=> completeTodo(todo.text)}
      onDelete = {() => deleteTodo(todo.text)}
      />
    ))}
    </TodoList>

    </React.Fragment>
  );
}

export {AppUI};