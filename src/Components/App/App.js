 import './App.css';
 import React from "react";
 import {AppUI} from './AppUI';

const defaultTodos = [
  {text: 'cortar cebolla', completed :  false},
  {text: 'cortar cilantro', completed :  false},
  {text: 'cortar zanahoria', completed :  false},
]

function App() {

  const[todos, setTodos]= React.useState(defaultTodos);
  const [searcherValue, setSearcher] = React.useState('');

  //TODOS MARKED AS COMPLETED
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searcherValue.length >=1){
    searchedTodos = todos;
  }else {
    searchedTodos = todos.filter (todo =>{
      const todoText = todo.text.toLowerCase();
      const searchText = searcherValue.toLowerCase();
      return todoText.includes(searchText);
    })
    
  }

  //MARK TODOS AS COMPLETED
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos= [...todos];
    newTodos[todoIndex].completed=true;
    setTodos(newTodos);

    // OTHER FORM TO DO THE LAST LINE
    // todos[todoIndex] = {
    //   text: todos[todoIndex].text ,
    //   completed: true
    // };
  }
  //DELETE TODO
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos= [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }

  return (
    <AppUI
      totalTodos = {totalTodos}
      completedTodos = {completedTodos}
      searcherValue={searcherValue}
      setSearcher={setSearcher}
      searchedTodos={searchedTodos}
      completeTodo = {completeTodo}
      deleteTodo= {deleteTodo}
    />
  );
    
}

export default App;
