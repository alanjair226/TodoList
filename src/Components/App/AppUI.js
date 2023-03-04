import React from 'react';
import { TodoCounter } from "../TodoCounter/TodoCounter.js";
 import { TodoSearch } from "../TodoSearch/TodoSearch.js";
 import { TodoList } from "../TodoList/TodoList.js";
 import { TodoItem } from "../TodoItem/TodoItem.js";
 import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton.js";

function AppUI({
        totalTodos,
      completedTodos,
      searcherValue,
      setSearcher,
      searchedTodos,
      completeTodo,
      deleteTodo
}){
    return(
        <React.Fragment>
      <TodoCounter
      total = {totalTodos}
      completed = {completedTodos}
      />
      <TodoSearch
        searcher={searcherValue}
        setSearcher={setSearcher}
      />
      <CreateTodoButton/>
      <TodoList>
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