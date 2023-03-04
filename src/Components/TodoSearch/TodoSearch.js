import { getValue } from "@testing-library/user-event/dist/utils";
import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css'

function TodoSearch(){
    const {searcherValue, setSearcher} = React.useContext(TodoContext);
    const onSearchValueChange = (event) => {
        setSearcher(event.target.value);
    };

    return[
        <input 
        className="TodoSearch" 
        placeholder="Cebolla"
        value={searcherValue}
        onChange={onSearchValueChange}
        />,
    ];
}

export {TodoSearch};