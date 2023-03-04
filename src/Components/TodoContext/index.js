import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider(props){
    const{
        Item: todos,
        saveItem: saveTodos,
        loading,
        error,
    } = useLocalStorage('TODOS_V1', []);
    const [searcherValue, setSearcher] = React.useState('');

    //TODOS MARKED AS COMPLETED
    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;

    let searchedTodos = [];


    //MARK TODOS AS COMPLETED
    const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos= [...todos];
    newTodos[todoIndex].completed=true;
    saveTodos(newTodos);

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
    saveTodos(newTodos);
    }
    return(
        <TodoContext.Provider value={{
            error,
            loading,
            totalTodos,
            completedTodos,
            searcherValue,
            setSearcher,
            searchedTodos,
            completeTodo,
            deleteTodo,
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}


export {TodoContext, TodoProvider};