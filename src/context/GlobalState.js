import {createContext, useReducer} from "react";
import {AppReducer} from "./AppReducer";

const initialState = {
    todos: [
        {id: 1, text: "Todo 1", done: false},
        {id: 2, text: "Todo 2", done: true},
        {id: 3, text: "Todo 3", done: false}
    ]
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function handleCheck(todo) {
        dispatch({
            type: 'HANDLE_CHECK',
            todo
        })
    }

    function addTodo(text) {
        dispatch({
            type: 'ADD_TODO',
            text
        })
    }

    function modifyTodo(id, text) {
        dispatch({
            type: 'MODIFY_TODO',
            id,
            text
        })
    }

    function deleteTodo(id) {
        dispatch({
            type: 'DELETE_TODO',
            id
        })
    }

    return (<GlobalContext.Provider value={{
        todos: state.todos,
        handleCheck,
        addTodo,
        modifyTodo,
        deleteTodo
    }}>
        {children}
    </GlobalContext.Provider>);
};
