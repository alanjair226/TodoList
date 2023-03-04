import { getValue } from "@testing-library/user-event/dist/utils";
import React from "react";
import './TodoSearch.css'

function TodoSearch({searcherValue, setSearcher}){

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