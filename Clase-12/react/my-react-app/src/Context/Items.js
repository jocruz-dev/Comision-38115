import React from "react";

const Contexts = {
    cartContext: React.createContext([]),
    listContext: React.createContext("LISTA CONTEXTO"),
    themeContext: React.createContext(true)
}

export default Contexts