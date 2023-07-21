import React, { useState, createContext } from "react";
//initialises dontext api
export const Context = createContext();
//provides components to context
export const ContextProvider = (props) => {
    const [username, setUsername] = useState("");
    const [secret, setSecret] = useState("");

    const value = {
        username,
        setUsername,
        secret,
        setSecret,
    };
    //Passes values as prop into provider
    return <Context.Provider value={value}>{props.children}</Context.Provider>
};