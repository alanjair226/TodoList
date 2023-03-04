import react from "react";
import './CreateTodoButton.css'

function CreateTodoButton(props){
    const onClickButton = (msg) => {
        alert(msg);
    };

    return(
        <button 
        className="CreateTodoButton"
        onClick = {() => onClickButton('Aqui debe salir el modal')}
        >+</button>
    );
}

export {CreateTodoButton};